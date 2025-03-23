from django.urls import path
from .views import *

urlpatterns = [
    path("start", StartGame.as_view(), name="start_game"),
    path("choices", PresentChoices.as_view(), name="choices_game"),
    path("selection", MakeChoices.as_view(), name="selection_game"),
    path('game_state', GetGameState.as_view(), name='get_game_state'),
    path('advance', DecadeProgression.as_view(), name='get_game_state'),

]