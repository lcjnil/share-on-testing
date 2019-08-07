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

## Mock 🌰 

一个前端数据管理工具（比如 vuex），其中有一个模块是负责存储的；需要在页面关闭时写入当前数据到 localStorage 保存，应用启动的时候从 localStorage 恢复。现在对这个存储模块进行测试。

Mock localStorage  <!-- .element: class="fragment" -->

----

## Stub 🌰  

这个工具有一个用户管理模块，其中有一个功能是需要完成登录、并且把登录后的用户信息报错在 store 里。

Stub Login API <!-- .element: class="fragment" -->


----

## 集成测试

1. Mock
   
   是以可控的方式模拟真实对象行为的假的对象 <!-- .element: class="fragment" -->
2. Stub

   着重于覆盖原始对象的某个或某些部分，并且可以记录其被调用的行为。 <!-- .element: class="fragment" -->


Note: 在集成测试中，关心的不是单个单个的函数或者方法，而是这些函数或者方法组合成的一个整体。在测试某一个整体的行为的时候，经常需要有其他的模块或者方法干扰该模块的测试，这个时候就需要通过 mock 或 stub 来减少这些外部的依赖，优化我们的测试。



----

## BDD

Behavior-Driven Development


<pre class="fragment"><code class="hljs lang-cucumber" data-trim data-noescape>
Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"
</code></pre>


[cucumber-js](https://cucumber.io/docs/guides/10-minute-tutorial/)  <!-- .element: class="fragment" -->


Note: BDD 是 TDD 的一个补充，是以用户行为的角度进行的测试。BDD 的意义是以调用方的角度来结构问题的复杂度，来点明待测试的核心。

----

## BDD 🌰 

DEMO

Note: 这里打开 im-sdk link 层的一个 测试，着重介绍下 describe, it, expect 的 BDD 风格，mock 和 stub。

---

# 番外：组件测试方法

----

## Snapshot

## Shallow Render

Note: UI 组件相对比较特殊，除了内部的逻辑之外，还有 UI/浏览器侧的逻辑需要处理，这里着重介绍一下前端组件相关的一些测试方法。


----


## Snapshot

某一时刻的组件做一个快照，测试回归的时候比较当前快照是否和之前正确的快照相匹配。

<pre class="fragment"><code class="hljs lang-javascript" data-trim>
import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
</code></pre>

Note: 能出现的原因，是 vue 和 react 都有虚拟 dom，是可以脱离浏览器渲染的。最早的 Snapshot 其实是启发自 screenshot testing，是给浏览器截图，然后回归的时候比较两次的截图是否有差异。

----

## Shalow Render

```jsx
function MyComponent() {
  return (
    <div>
      <span className="heading">Title</span>
      <Subcomponent foo="bar" />
    </div>
  );
}

```

```jsx
import ShallowRenderer from 'react-test-renderer/shallow';

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <span className="heading">Title</span>,
  <Subcomponent foo="bar" />
]);
```

---

# 功能测试

<h2 class="fragment">从<span class="fragment highlight-red">用户</span>的角度针对软件界面、功能及外部结构进行测试</h2>


Note: 功能测试又叫端到端测试（e2e test）、功能测试。在前端领域，主要是模拟用户的实际操作（比如点击、输入、鼠标移动）来进行测试。多以黑盒测试为主。

----

## 两大要素

1. 浏览器
2. 驱动

----

## 浏览器

1. 真实的浏览器 <!-- .element: class="fragment" -->
    1. Chrome
    2. Firefox
2. 无UI的浏览器（Headless） <!-- .element: class="fragment" -->
    1. Headless Chrome
    2. Headless Firefox
3. 假浏览器 <!-- .element: class="fragment" -->
    1. PhantomJS
   
[[Announcement] Stepping down as maintainer](https://groups.google.com/forum/#!topic/phantomjs/9aI5d-LDuNE) <!-- .element: class="fragment" -->

Note: 路径是 1 -> 3 -> 2，1 2 相对来说支持度比较好，而且比较好测兼容性。phantomjs 虽然运行速度稍快，但是更新跟不上

----

## 驱动

1. WebDriver/Selenium <!-- .element: class="fragment" -->
2. Devtool Protocol <!-- .element: class="fragment" -->
    1. Puppeteer
3. In-Browser Protocol <!-- .element: class="fragment" -->
    1. Cypress

----

## Selenium

<style>
ol {padding: 0;}
table {white-space: nowrap;}
</style>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Pros.</th>
            <th>Cons.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Selenium</td>
            <td>
                <ol>
                    <li> 支持度高
                    <li> 兼容度好
                </ol>
            </td>
            <td>
                <ol>
                    <li> 慢
                </ol>
            </td>
        </tr>
        <tr>
            <td>Devtools</td>
            <td>
                <ol>
                    <li> 非常快
                    <li> Node 友好
                </ol>
            </td>
            <td>
                <ol>
                    <li> 只支持 Chrome *
                    <li> 只支持 Node
                </ol>
            </td>
        </tr>
        <tr>
            <td>Cypress</td>
             <td>
                <ol>
                    <li> 非常快
                </ol>
            </td>
            <td>
                <ol>
                    <li> 受到原生浏览器 API 限制
                    <li> 支持度一般
                </ol>
            </td>
        </tr>
    </tbody>
</table>


----

# 🌰 