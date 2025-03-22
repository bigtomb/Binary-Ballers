import random
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

STARTING_STATE = {
    "age": 18,
    "net_worth": 1000,
    "income": 0,
    "debt": 0,
    "savings": 0,
    "decade": "18-25",
    "housing": {
        "rent": 0,
        "mortgage": 0,
    }
}

SELECT_CHOICES = []

ANYTIME_EVENTS = []

CHOICES = {
    "18-25": {
        "education": [
            { "id": 0, "name": "Go to College", "impact": { "debt": -50000, "income": 60000 } },
            { "id": 1, "name": "Go to Trade School", "impact": { "debt": -15000, "income": 50000 } },
            { "id": 2, "name": "Enter the Workforce Immediately", "impact": { "income": 30000 } }
        ],
        "living": [
            { "id": 3, "name": "Live at Home", "impact": { "savings": 10000, "independence": -1 } },
            { "id": 4, "name": "Rent an Apartment", "impact": { "savings": -12000, "independence": 1 } },
            { "id": 5, "name": "Get a Roommate", "impact": { "savings": -6000, "independence": 1 } },
            { "id": 6, "name": "Buy a House", "impact": { "debt": -150000, "net_worth": 150000 } }
        ],
        "financial": [
            { "id": 7, "name": "Open a Credit Card", "impact": { "credit_score": 1, "debt": -1000 } },
            { "id": 8, "name": "Spend Freely", "impact": { "savings": -5000 } },
            { "id": 9, "name": "Save and Budget Wisely", "impact": { "savings": 10000 } },
            { "id": 10, "name": "Start Investing Early", "impact": { "net_worth": 5000 } }
        ],
        "random_events": [
            { "id": 11, "name": "Car Breaks Down", "impact": { "savings": -2000 } },
            { "id": 12, "name": "Win a Small Lottery", "impact": { "savings": 5000 } },
            { "id": 13, "name": "Unexpected Medical Bill", "impact": { "savings": -3000 } }
        ]
    },
    "25-35": {
        "career_progression": [
            { "id": 14, "name": "Stay at the Same Job", "impact": { "income": 70000 } },
            { "id": 15, "name": "Change Jobs for Higher Salary", "impact": { "income": 90000, "risk": 1 } },
            { "id": 16, "name": "Start a Business", "impact": { "debt": -50000, "net_worth": 100000 } }
        ],
        "housing": [
            { "id": 17, "name": "Continue Renting", "impact": { "savings": -15000 } },
            { "id": 18, "name": "Buy a Home", "impact": { "debt": -250000, "net_worth": 250000 } },
            { "id": 19, "name": "Move to a Different City", "impact": { "income": 80000, "costs": -10000 } }
        ],
        "random_events": [
            { "id": 20, "name": "Car Accident", "impact": { "savings": -5000 } },
            { "id": 21, "name": "Receive an Inheritance", "impact": { "net_worth": 20000 } },
            { "id": 22, "name": "Lose a Job", "impact": { "income": -40000 } }
        ]
    },
    "35-50": {
        "career_worklife": [
            { "id": 23, "name": "Push for Promotions", "impact": { "income": 100000, "stress": 2 } },
            { "id": 24, "name": "Stay in Current Role", "impact": { "income": 85000 } },
            { "id": 25, "name": "Start a Side Business", "impact": { "income": 20000, "time_commitment": -1 } }
        ],
        "housing": [
            { "id": 26, "name": "Continue Renting", "impact": { "savings": -20000 } },
            { "id": 27, "name": "Buy a Home", "impact": { "debt": -300000, "net_worth": 350000 } }
        ],
        "random_events": [
            { "id": 28, "name": "Major Home Repairs", "impact": { "savings": -10000 } },
            { "id": 29, "name": "Stock Market Crash", "impact": { "net_worth": -20000 } },
            { "id": 30, "name": "Big Promotion", "impact": { "income": 20000 } }
        ]
    },
    "50-65": {
        "career_retirement": [
            { "id": 31, "name": "Keep Working", "impact": { "income": 120000 } },
            { "id": 32, "name": "Retire Early", "impact": { "savings": -500000, "happiness": 2 } },
            { "id": 33, "name": "Start a Consulting Job", "impact": { "income": 60000, "flexibility": 2 } }
        ],
        "random_events": [
            { "id": 34, "name": "Medical Emergency", "impact": { "savings": -50000 } },
            { "id": 35, "name": "Real Estate Investment Pays Off", "impact": { "net_worth": 50000 } },
            { "id": 36, "name": "Unexpected Family Expense", "impact": { "savings": -15000 } }
        ]
    },
    "65+": {
        "lifestyle_in_retirement": [
            { "id": 37, "name": "Move to a Cheaper Location", "impact": { "expenses": -20000, "quality_of_life": 1 } },
            { "id": 38, "name": "Stay in the Same City", "impact": { "expenses": -10000, "familiarity": 2 } },
            { "id": 39, "name": "Travel and Enjoy Retirement", "impact": { "savings": -50000, "happiness": 3 } }
        ],
        "random_events": [
            { "id": 40, "name": "Receive a Large Inheritance", "impact": { "net_worth": 100000 } },
            { "id": 41, "name": "Health Decline", "impact": { "expenses": -30000, "happiness": -1 } },
        ]
    }
}

RANDOM_EVENTS = [
    {"name": "Medical Emergency", "impact": {"net_worth": -5000}},
    {"name": "Unexpected Bonus", "impact": {"net_worth": 3000}},
    {"name": "Stock Market Crash", "impact": {"net_worth": -10000}},
    {"name": "Lucky Investment", "impact": {"net_worth": 10000}},
]


# Initialize game state
class StartGame(APIView):
    def get(self, request):
        request.session["game_state"] = STARTING_STATE
        return Response({"game_state": request.session["game_state"]})

class PresentChoices(APIView):
    def get(self, request):
        choices = CHOICES.get(request.session["game_state"]["decade"], [])
        return Response({"choices": choices})

