INSERT INTO recipes (name, syrup, tea, water, milk, honey, availability, note) 
VALUES (
  'CMF Green Tea',
  NULL,
  '[
    {
      "value": 240,
      "unit": "ml",
      "type": "Standard"
    },
    {
      "value": 180,
      "unit": "ml",
      "type": "OneTopping"
    },
    {
      "value": 240,
      "unit": "ml",
      "type": "TwoorMoreToppings"
    }
  ]'::jsonb,
  NULL,
  NULL,
  '[
    {
      "value": 1.2,
      "unit": "honey",
      "type": "Standard"
    },
    {
      "value": 0.9,
      "unit": "honey",
      "type": "Standard"
    },
    {
      "value": 0.7,
      "unit": "honey",
      "type": "Standard"
    }
  ]'::jsonb,
  true,
  NULL
);

INSERT INTO recipes (name, syrup, tea, water, milk, honey, availability, note) 
VALUES (
  'CMF Black Tea',
  NULL,
  '[
    {
      "value": 180,
      "unit": "ml",
      "type": "Standard",
      "note": "Black Tea"
    },
    {
      "value": 140,
      "unit": "ml",
      "type": "OneTopping",
      "note": "Black Tea"
    },
    {
      "value": 100,
      "unit": "ml",
      "type": "TwoorMoreToppings",
      "note": "Black Tea"
    }
  ]'::jsonb,
  '[
    {
      "value": 60,
      "unit": "ml",
      "type": "Standard"
    },
    {
      "value": 40,
      "unit": "ml",
      "type": "OneTopping"
    },
    {
      "value": 20,
      "unit": "ml",
      "type": "TwoorMoreToppings"
    }
  ]'::jsonb,
  NULL,
  '[
    {
      "value": 1.2,
      "unit": "honey",
      "type": "Standard"
    },
    {
      "value": 0.9,
      "unit": "honey",
      "type": "Standard"
    },
    {
      "value": 0.7,
      "unit": "honey",
      "type": "Standard"
    }
  ]'::jsonb,
  true,
  NULL
);