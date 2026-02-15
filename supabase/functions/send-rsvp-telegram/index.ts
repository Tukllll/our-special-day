import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, attending, alcohol, food, wishes } = await req.json();

    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const chatId = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!botToken || !chatId) {
      throw new Error('Telegram credentials not configured');
    }

    const attendingText = attending === 'yes' ? '✅ Да, с радостью' : '❌ Не смогу';
    
    const drinkMap: Record<string, string> = {
      wine: '🍷 Вино',
      champagne: '🥂 Шампанское',
      strong: '🥃 Крепкие',
      none: '🍹 Без алкоголя',
    };
    
    const foodMap: Record<string, string> = {
      meat: '🥩 Мясо',
      fish: '🐟 Рыба',
      vegan: '🥗 Вегетарианское',
    };

    let message = `💌 *Новый ответ на приглашение*\n\n`;
    message += `👤 *Имя:* ${name}\n`;
    message += `📋 *Присутствие:* ${attendingText}\n`;
    
    if (attending === 'yes') {
      if (alcohol) message += `🍸 *Напитки:* ${drinkMap[alcohol] || alcohol}\n`;
      if (food) message += `🍽 *Еда:* ${foodMap[food] || food}\n`;
    }
    
    if (wishes) message += `💬 *Пожелания:* ${wishes}\n`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramRes.ok) {
      const err = await telegramRes.text();
      throw new Error(`Telegram API error: ${err}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
