from django.db import models


class SkiResort (models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=7, decimal_places=4)
    longitude = models.DecimalField(max_digits=8, decimal_places=4)
    pass_type = models.CharField(max_length=100)
    lift_ticket_price = models.DecimalField(max_digits=5, decimal_places=2)
    peak_altitude = models.DecimalField(max_digits=5, decimal_places=0)
    base_altitude = models.DecimalField(max_digits=5, decimal_places=0)
    average_snowfall = models.DecimalField(max_digits=4, decimal_places=0)
    skiiable_acreage = models.DecimalField(max_digits=5, decimal_places=0)
    chairlifts = models.DecimalField(max_digits=3, decimal_places=0)
    tram = models.DecimalField(max_digits=1, decimal_places=0)
    trails = models.DecimalField(max_digits=4, decimal_places=0)
    country = models.CharField(max_length=255)
    continent = models.CharField(max_length=255)

