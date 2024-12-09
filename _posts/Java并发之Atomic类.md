---
title: Java并发之Atomic类
date: 2021-10-24 10:31:32
tags:
- 并发编程
---

#### Atomic类初见

小张在开发的过程中，遇到一个需求，需要实现一个线程安全的计数器，于是他随手写出了下面的代码

```Java
public class Counter {
    
    private int count;

    public Counter(int count) {
        this.count = count;
    }

    public synchronized void add(int num){
        this.count += num;
    }
    
    public synchronized void sub(int num){
        this.count -= num;
    }
    
    public synchronized void incr(){
        add(1);
    }
    
    public synchronized void desc(){
        sub(1);
    }
}
```

研发主管看到他的代码后，建议他先去了解下Java并发包中的Atomic如何再重写这个功能，小张在简单了解Atom类后，写出了下面的代码

```Java
public class AtomCounter {
    
    private volatile AtomicInteger count;

    public AtomCounter() {
        this.count = new AtomicInteger(0);
    }
    
    public void add(int num){
        count.getAndAdd(num);
    }
    
    public void sub(int num){
        count.getAndAdd(-1 * num);
    }
    
    public void incr(){
        add(1);
    }
    public void decr(){
        sub(-1);
    }
    
}
```

研发主管为了知道小张是否有弄懂Atomic类的原理，问下他下面的问题，这2种累加器的原理和区别？

小张的回答：

第一种使用了悲观锁，认为会有很多其他线程会操作数据，对数据操作前先加锁，保证每次只有一个线程能操作数据，从而保证线程安全

第二种使用了乐观锁（CAS），认为不会有很多其他线程来操作数据，于是在操作数据前判断数据有没有被其他线程修改（因为使用了volatile保证了可见性），如果没有被其他线程修改，那么可以继续接下来的操作，如果被其他线程修改了，就需要重新读取，然后重复上面的操作。

#### ABA问题与AtomicStampedReference类

上面提到，CAS是通过值比较实现，如果一个线程先将A修改为B，然后把B修改为A，此时其他的线程就就会判断这个数据没有被其他线程修改过。

为了解决了这个问题，JUC提供了AtomicStampedReference类，该类有一个内部类Pair,Pair类中有2个数据，reference就是我们操作的数据，stamp就是版本号，通过同时比较reference和stamp就可以解决ABA问题

```Java
private static class Pair<T> {
        final T reference;
        final int stamp;

        private Pair(T var1, int var2) {
            this.reference = var1;
            this.stamp = var2;
        }

        static <T> AtomicStampedReference.Pair<T> of(T var0, int var1) {
            return new AtomicStampedReference.Pair(var0, var1);
        }
    }

```

AtomicStampedReference的compareAndSet函数

```java
public boolean compareAndSet(V var1, V var2, int var3, int var4) {
    AtomicStampedReference.Pair var5 = this.pair;
    return var1 == var5.reference && var3 == var5.stamp && (var2 == var5.reference && var4 == var5.stamp || this.casPair(var5, AtomicStampedReference.Pair.of(var2, var4)));
}
```



#### LongAdder

上面的AtomicInteger在高并发的情况下，会有多个线程同时竞争对一个数据的修改，这种情况下会有线程一直自旋，JUC提供了LongAdder来解决这个问题，将一个变量分为多个变量，多个线程不用竞争一个资源，这样就增加了并发度（有点类似ConcurrentHashMap，减少锁的粒度）。

![](https://img-1253530244.cos.ap-guangzhou.myqcloud.com/blog/20211024125245.png)



需要注意的是longAdder不能保证强一致性，因为在累加时，并没有对cell数组加锁，sum函数如下

```Java
public long sum() {
        Cell[] var1 = this.cells;
        long var3 = this.base;
        if (var1 != null) {
            for(int var5 = 0; var5 < var1.length; ++var5) {
                Cell var2;
                if ((var2 = var1[var5]) != null) {
                    var3 += var2.value;
                }
            }
        }

        return var3;
    }
```





























