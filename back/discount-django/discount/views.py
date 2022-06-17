from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import (ListCreateAPIView, RetrieveUpdateDestroyAPIView, )
from .permissions import IsOwnerProfileOrReadOnly

from . import serializers
from . import models


class DiscountViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.DiscountSerializer
    queryset = models.Discount.objects.all()


class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserProfileSerializer
    queryset = models.UserProfile.objects.all()


class ShopViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ShopSerializer
    queryset = models.Shop.objects.all()


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductSerializer
    queryset = models.Product.objects.all()


class UserProfileListCreateView(ListCreateAPIView):
    queryset = models.UserProfile.objects.all()
    serializer_class = serializers.UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)


class UserProfileDetailView(RetrieveUpdateDestroyAPIView):
    queryset = models.UserProfile.objects.all()
    serializer_class = serializers.UserProfileSerializer
    permission_classes = [IsOwnerProfileOrReadOnly, IsAuthenticated]
