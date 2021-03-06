# Generated by Django 3.2 on 2021-11-10 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('discount', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='discount',
            name='products',
            field=models.ManyToManyField(to='discount.Product'),
        ),
        migrations.AddField(
            model_name='discount',
            name='shops',
            field=models.ManyToManyField(to='discount.Shop'),
        ),
        migrations.AddField(
            model_name='discount',
            name='users',
            field=models.ManyToManyField(to='discount.User'),
        ),
    ]
