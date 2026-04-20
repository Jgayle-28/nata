function getPlans(req, res) {
  res.json({
    plans: [
      {
        id: 'association-monthly',
        name: 'Association Membership',
        summary: 'Core membership plan for active artists',
      },
      {
        id: 'association-6mo',
        name: '6-Month Membership',
        summary: 'Prepaid 6-month option with savings',
      },
      {
        id: 'association-yearly',
        name: 'Yearly Membership',
        summary: 'Best-value annual plan',
      },
    ],
  })
}

module.exports = { getPlans }
