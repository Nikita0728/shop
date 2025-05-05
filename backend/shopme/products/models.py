from django.db import models
import uuid

# Create your models here.
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default = uuid.uuid4, editable=False)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')
    name= models.CharField(max_length=150, unique=True)
    # price = models.DecimalField(max_digits=8, decimal_places=3)
    stock = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)
    is_latest = models.BooleanField(default=True)
    is_featured= models.BooleanField(default = False)


    
    def __str__(self):
        return self.name