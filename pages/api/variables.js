const variables = {
  support_phone: "+213-542-90-50-08",
  support_email: "support@americanrivergold.com",
  dinars_per_usd: 183,
  card_price_dinars: 2150,
  min_opening_balance_usd_cents: 500,
  card_monthly_cost_usd_cents: 49,
};

export default function handler(_req, res) {
  res.status(200).json(variables);
}
