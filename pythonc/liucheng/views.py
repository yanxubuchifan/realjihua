from django.shortcuts import render

# Create your views here.
def goindex(request):
    return render(request,"web/index.html")