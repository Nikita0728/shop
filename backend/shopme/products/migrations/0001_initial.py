# Generated by Django 5.2 on 2025-05-01 02:33

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='products/')),
                ('name', models.CharField(max_length=150, unique=True)),
                ('price', models.DecimalField(decimal_places=3, max_digits=8)),
                ('stock', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_latest', models.BooleanField(default=True)),
                ('is_featured', models.BooleanField(default=False)),
            ],
        ),
    ]
