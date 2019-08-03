# 自动化测试

---

## 为什么
## 是什么
## 怎么写

---

# 为什么

----

## uniq function

<pre class="fragment"><code class="hljs lang-javascript" data-trim data-noescape>
function uniq(arr) {
    return arr.filter(
        (item, index) => index === arr.lastIndexOf(item)
    )
}
</code></pre>

<pre class="fragment"><code class="hljs lang-javascript" data-trim data-noescape>
uniq([1, 1, 2, 2, 3, 3])
uniq([1, 1, 2, 2, "3", "3"])
uniq([
    1, 1, "1", "1" 
    undefined, undefined, 
    null, null, NaN, NaN
])
</code></pre>

Note: 这里先从一个简单的函数开始写起，然后讲下测试可以帮助我们发现一个问题

----

## 自动化测试的好处

1. 提前发现问题
2. 上线更有底气

----

---

# 是什么

----

## 测试粒度

1. 单元测试（Unit Test）<br/><small class="fragment">针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。程序单元是应用的最小可测试部件</small>
2. 集成测试（Integration Test）<br/><small class="fragment">将程序模块组装起来，对系统的接口进行正确性检验的测试工作</small>
3. 功能测试（Function Test） <br/><small class="fragment">从用户的角度针对软件界面、功能及外部结构进行测试</small> 
<br/><small class="fragment">Feature/E2E test</small> 

Note: 针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。程序单元是应用的最小可测试部件

----

![哪里可以买得到呢？](./assets/1.png)

---

# 怎么写

----

# 单元测试

1. Test Runner <!-- .element: class="fragment" -->
    1. Jasmine
    2. Ava
    3. Tape
    4. ...
2. Assertion <!-- .element: class="fragment" -->
    1. Chai
    2. Should.js

<!--
3. Mock & Stub & Fixture
    1. Sinon.js 
-->


----

## TDD

Test-Driven Development

> 代码未动，测试先行 <!-- .element: class="fragment" -->

----

## TDD 🌰 

A fizzbuzz problem

> 一个函数接受一个数字，如果能被 3 整除就返回 Fizz，如果能被 5 整除就返回 Buzz，如果既能被 3 又能被 5 整除就返回 FizzBuzz

----
## TDD 🌰 

```javascript
test("fizzbuzz", () => {
    expect(fn(3)).toBe('Fizz')  
    expect(fn(5)).toBe('Buzz')
    expect(fn(15)).toBe(FizzBuzz)
    ...
})
```

------

```
function fn(num) {
    // some code about fizzbuzz
}
```

----

## 量化

代码覆盖率

<pre class="fragment"><code class="hljs lang-javascript" data-trim data-noescape>
    |--------------|----------|----------|----------|----------|
    |  File        |  % Stmts | % Branch |  % Funcs |  % Lines |
    |--------------|----------|----------|----------|----------|
    | link-sdk/src |    86.85 |    92.86 |    86.36 |    86.69 |
    |  index.ts    |     92.5 |      100 |    71.43 |    92.11 |
    |  ws.ts       |    85.78 |    92.86 |    89.19 |    85.71 |
    | utils/src    |    70.83 |    83.33 |    55.17 |    72.46 |
    |  index.ts    |    70.83 |    83.33 |    55.17 |    72.46 |
    |--------------|----------|----------|----------|----------|
</code></pre>

---

# 集成测试

<h2 class="fragment">将程序模块组装起来，对系统的<span class="fragment highlight-red">接口</span>进行正确性检验的测试工作</h2>

----

## 集成测试

1. Mock
   
   是以可控的方式模拟真实对象行为的假的对象 <!-- .element: class="fragment" -->
2. Stub

   着重于覆盖原始对象的某个或某些部分，并且可以记录其被调用的行为。 <!-- .element: class="fragment" -->


Note: 在集成测试中，关心的不是单个单个的函数或者方法，而是这些函数或者方法组合成的一个整体。在测试某一个整体的行为的时候，经常需要有其他的模块或者方法干扰该模块的测试，这个时候就需要通过 mock 或 stub 来减少这些外部的依赖，优化我们的测试。



----


## Mock 🌰 

一个前端数据管理工具（比如 vuex），其中有一个模块是负责存储的；需要在页面关闭时写入当前数据到 localStorage 保存，应用启动的时候从 localStorage 恢复。现在对这个存储模块进行测试。

Mock localStorage  <!-- .element: class="fragment" -->

----

## Stub 🌰  

这个工具有一个用户管理模块，其中有一个功能是需要完成登录、并且把登录的信息报错在 store 里。

Stub Login API <!-- .element: class="fragment" -->