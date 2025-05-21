FROM python:3.10


ENV PYTHONDONTWRITEBYTECODE = 1
ENV PYTHONUNBUFFERED =1 

#SET WORKIGN DIRECTORY INSIDE THE CONTAINER
WORKDIR/app

#INSTALL DEPENDENCIES
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the Django code
COPY . .

# Start the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
