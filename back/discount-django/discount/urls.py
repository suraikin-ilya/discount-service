from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views
from .views import UserProfileListCreateView, UserProfileDetailView


router = DefaultRouter()
router.register(r'discount', views.DiscountViewSet)
router.register(r'user', views.UserProfileViewSet)
router.register(r'shop', views.ShopViewSet)
router.register(r'product', views.ProductViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('discount', views.DiscountViewSet, name='discount'),
    path('user-profile', views.UserProfileViewSet, name='user-profile'),
    path('shop', views.ShopViewSet, name='shop'),
    path('product', views.ProductViewSet, name='product'),
    path("all-profiles", UserProfileListCreateView.as_view(), name="all-profiles"),
    path("profile/<int:pk>", UserProfileDetailView.as_view(), name="profile"),
]


