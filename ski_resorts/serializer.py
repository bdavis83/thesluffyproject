from rest_framework import serializers
from .models import SkiResort


class SkiResortSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkiResort
        fields = ['id', 'name', 'city', 'state', 'region', 'latitude', 'longitude', 'pass_type', 'lift_ticket_price', 'peak_altitude', 'base_altitude', 'average_snowfall', 'skiiable_acreage', 'chairlifts', 'tram', 'trails', 'country', 'continent']
        depth = 1