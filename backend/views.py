from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import Product, Category, Order
from .forms import ProductForm, OrderForm

def home(request):
    products = Product.objects.filter(available=True)
    categories = Category.objects.all()
    return render(request, 'home.html', {'products': products, 'categories': categories})

def product_detail(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    return render(request, 'product_detail.html', {'product': product})

@login_required
def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            product = form.save(commit=False)
            product.seller = request.user
            product.save()
            return redirect('product_detail', product_id=product.id)
    else:
        form = ProductForm()
    return render(request, 'add_product.html', {'form': form})

@login_required
def place_order(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            order = form.save(commit=False)
            order.buyer = request.user
            order.product = product
            order.total_price = product.price * order.quantity
            order.save()
            return redirect('order_confirmation', order_id=order.id)
    else:
        form = OrderForm()
    return render(request, 'place_order.html', {'form': form, 'product': product})

@login_required
def order_confirmation(request, order_id):
    order = get_object_or_404(Order, id=order_id, buyer=request.user)
    return render(request, 'order_confirmation.html', {'order': order})