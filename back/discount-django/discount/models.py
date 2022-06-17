from django.db import models
from django.contrib.auth.models import User


class Discount(models.Model):
    discount_name = models.CharField(max_length=30)
    magazine = models.CharField(max_length=30)
    percent = models.PositiveIntegerField
    users = models.ManyToManyField('UserProfile')
    shops = models.ManyToManyField('Shop')
    products = models.ManyToManyField('Product')

    def __str__(self):
        return self.discount_name


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    description = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=30, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    is_organizer = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username


class Shop(models.Model):
    magazine = models.CharField(max_length=30)
    place = models.CharField(max_length=100)

    # discounts = models.ManyToManyField('Discount')

    def __str__(self):
        return self.magazine


class Product(models.Model):
    product = models.CharField(max_length=50)

    # discounts = models.ManyToManyField(Discount)

    def __str__(self):
        return self.product
