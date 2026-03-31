---
title: Python 装饰器的高级应用
layout: page
---

# Python 装饰器的高级应用

## 什么是装饰器？

装饰器是 Python 中一种强大的语法特性，它允许你在不修改原函数代码的情况下，增强函数的功能。装饰器本质上是一个函数，它接收一个函数作为参数，并返回一个新的函数。

## 基础装饰器

### 简单装饰器示例

```python
def simple_decorator(func):
    def wrapper():
        print("Before function execution")
        func()
        print("After function execution")
    return wrapper

@simple_decorator
def say_hello():
    print("Hello, world!")

# 调用函数
say_hello()
```

运行结果：
```
Before function execution
Hello, world!
After function execution
```

## 带参数的装饰器

### 基本带参数装饰器

```python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello(name):
    print(f"Hello, {name}!")

# 调用函数
say_hello("Alice")
```

运行结果：
```
Hello, Alice!
Hello, Alice!
Hello, Alice!
```

### 带关键字参数的装饰器

```python
def log_with_level(level):
    def decorator(func):
        def wrapper(*args, **kwargs):
            print(f"[{level.upper()}] Calling function: {func.__name__}")
            result = func(*args, **kwargs)
            print(f"[{level.upper()}] Function {func.__name__} completed")
            return result
        return wrapper
    return decorator

@log_with_level("info")
def add(a, b):
    return a + b

# 调用函数
result = add(5, 3)
print(f"Result: {result}")
```

运行结果：
```
[INFO] Calling function: add
[INFO] Function add completed
Result: 8
```

## 类装饰器

### 基于类的装饰器

```python
class Timer:
    def __call__(self, func):
        def wrapper(*args, **kwargs):
            import time
            start_time = time.time()
            result = func(*args, **kwargs)
            end_time = time.time()
            print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds to execute")
            return result
        return wrapper

@Timer()
def slow_function():
    import time
    time.sleep(1)
    print("Function completed")

# 调用函数
slow_function()
```

运行结果：
```
Function completed
Function slow_function took 1.0012 seconds to execute
```

## 保留函数元数据

### 使用 functools.wraps

当使用装饰器时，原函数的元数据（如函数名、文档字符串等）会丢失。我们可以使用 `functools.wraps` 来保留这些元数据。

```python
import functools

def decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        """Wrapper function"""
        print("Before function execution")
        result = func(*args, **kwargs)
        print("After function execution")
        return result
    return wrapper

@decorator
def say_hello():
    """Say hello function"""
    print("Hello, world!")

# 查看函数元数据
print(f"Function name: {say_hello.__name__}")
print(f"Function docstring: {say_hello.__doc__}")
```

运行结果：
```
Function name: say_hello
Function docstring: Say hello function
```

## 装饰器的实际应用场景

### 1. 日志记录

```python
import functools
import logging

logging.basicConfig(level=logging.INFO)

def log(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        logging.info(f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        logging.info(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@log
def add(a, b):
    return a + b

# 调用函数
add(5, 3)
```

### 2. 缓存

```python
import functools

def cache(func):
    cache_dict = {}
    
    @functools.wraps(func)
    def wrapper(*args):
        if args not in cache_dict:
            cache_dict[args] = func(*args)
        return cache_dict[args]
    return wrapper

@cache
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 调用函数
print(fibonacci(10))  # 第一次计算
print(fibonacci(10))  # 从缓存中获取
```

### 3. 权限验证

```python
import functools

def require_permission(permission):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # 假设 current_user 是当前登录用户
            current_user = {"permissions": ["read", "write"]}
            
            if permission not in current_user["permissions"]:
                raise PermissionError(f"User does not have {permission} permission")
            return func(*args, **kwargs)
        return wrapper
    return decorator

@require_permission("write")
def create_post(title, content):
    print(f"Creating post: {title}")
    return {"title": title, "content": content}

# 调用函数
create_post("Hello", "World")
```

## 总结

装饰器是 Python 中非常强大的特性，它可以帮助你：

1. **增强函数功能**：在不修改原函数代码的情况下添加额外功能
2. **代码复用**：将通用功能抽取为装饰器，在多个函数中重复使用
3. **提高代码可读性**：使用装饰器可以使代码更加简洁明了
4. **分离关注点**：将横切关注点（如日志、缓存、权限验证）与业务逻辑分离

通过掌握装饰器的使用，你可以编写更加优雅、高效的 Python 代码。