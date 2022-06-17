from django.contrib import admin

from . import models


admin.site.register(models.Discount)
admin.site.register(models.UserProfile)
admin.site.register(models.Shop)
admin.site.register(models.Product)
