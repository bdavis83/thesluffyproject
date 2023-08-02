# Generated by Django 4.2.3 on 2023-07-25 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SkiResort',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('state', models.CharField(max_length=255)),
                ('region', models.CharField(max_length=255)),
                ('latitude', models.DecimalField(decimal_places=4, max_digits=7)),
                ('longitude', models.DecimalField(decimal_places=4, max_digits=8)),
                ('pass_type', models.CharField(max_length=100)),
                ('lift_ticket_price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('peak_altitude', models.DecimalField(decimal_places=2, max_digits=5)),
                ('base_altitude', models.DecimalField(decimal_places=2, max_digits=5)),
                ('average_snowfall', models.DecimalField(decimal_places=2, max_digits=4)),
                ('skiiable_acreage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('chairlifts', models.DecimalField(decimal_places=2, max_digits=3)),
                ('tram', models.DecimalField(decimal_places=0, max_digits=1)),
                ('trails', models.DecimalField(decimal_places=2, max_digits=4)),
                ('country', models.CharField(max_length=255)),
                ('conitnent', models.CharField(max_length=255)),
            ],
        ),
    ]