let gt = 0;
function bt(l = "jelly") {
  return `${l}-${++gt}`;
}
function A(l, t, e = null, i = {}) {
  const s = new CustomEvent(t, {
    bubbles: !0,
    composed: !0,
    detail: e,
    ...i
  });
  return l.dispatchEvent(s);
}
function lt(l) {
  return String(l).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function I(l) {
  return getComputedStyle(l).direction === "rtl";
}
const J = {
  sm: "small",
  md: "medium",
  lg: "large"
};
function M(l) {
  const t = l.getAttribute("size");
  t && J[t] && l.setAttribute("size", J[t]);
}
function b(l, t, e) {
  return Math.max(t, Math.min(e, l));
}
function z(l, t, e, i, s, r) {
  const n = (e - l) * i - t * s, o = t + n * r;
  return [l + o * r, o];
}
const U = typeof matchMedia == "function" ? matchMedia("(prefers-reduced-motion: reduce)") : null;
function Z() {
  const l = typeof document < "u" ? document.documentElement.getAttribute("data-jelly-motion") : null;
  return l === "reduce" ? !0 : l === "no-preference" ? !1 : U ? U.matches : !1;
}
function T(l = 8) {
  if ("vibrate" in navigator)
    try {
      navigator.vibrate(l);
    } catch {
    }
}
function yt(l, t = !1) {
  return l === "ArrowRight" ? t ? -1 : 1 : l === "ArrowLeft" ? t ? 1 : -1 : 0;
}
function ft(l) {
  const t = I(l), e = t ? "-35%" : "35%", i = t ? "1.5%" : "-1.5%";
  l.style.transformOrigin = t ? "left center" : "right center", !(Z() || !l.animate) && l.animate(
    [
      { opacity: 0, transform: `translateX(${e}) scale(0.9)` },
      { opacity: 1, transform: `translateX(${i}) scale(1.015)`, offset: 0.62 },
      { transform: "translateX(0) scale(1)" }
    ],
    { duration: 480, easing: "cubic-bezier(.16,.82,.28,1)" }
  );
}
function mt(l, t) {
  const e = I(l), i = e ? "-30%" : "30%";
  if (l.style.transformOrigin = e ? "left center" : "right center", Z() || !l.animate) {
    t();
    return;
  }
  const s = l.animate(
    [
      { opacity: 1, transform: "translateX(0) scale(1)" },
      { opacity: 0, transform: `translateX(${i}) scale(0.92)` }
    ],
    { duration: 320, easing: "cubic-bezier(.4,0,.5,1)" }
  );
  s.onfinish = t, s.oncancel = t;
}
const vt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 8.5a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75ZM12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
`, xt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>
`, kt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.14 3.7a3.25 3.25 0 0 1 5.72 0l6.74 12.5a3.25 3.25 0 0 1-2.86 4.8H5.25a3.25 3.25 0 0 1-2.86-4.8L9.14 3.7ZM12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-7.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 7.5Z"/></svg>
`, jt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 12.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a.75.75 0 0 0-.75.75v4.6a.75.75 0 0 0 1.5-.1v-4.5l-.01-.1a.75.75 0 0 0-.75-.65Z"/></svg>
`, Ct = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.39705 4.55379L4.46967 4.46967C4.73594 4.2034 5.1526 4.1792 5.44621 4.39705L5.53033 4.46967L12 10.939L18.4697 4.46967C18.7626 4.17678 19.2374 4.17678 19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L13.061 12L19.5303 18.4697C19.7966 18.7359 19.8208 19.1526 19.6029 19.4462L19.5303 19.5303C19.2641 19.7966 18.8474 19.8208 18.5538 19.6029L18.4697 19.5303L12 13.061L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303C4.17678 19.2374 4.17678 18.7626 4.46967 18.4697L10.939 12L4.46967 5.53033C4.2034 5.26406 4.1792 4.8474 4.39705 4.55379Z"/></svg>
`, wt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1017 17.1624C14.717 18.3101 12.9391 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9391 18.3101 14.717 17.1624 16.1018L21.7803 20.7197C22.0732 21.0126 22.0732 21.4874 21.7803 21.7803C21.4874 22.0732 21.0125 22.0732 20.7196 21.7803L16.1017 17.1624ZM17.5 11C17.5 7.41015 14.5899 4.5 11 4.5C7.41015 4.5 4.5 7.41015 4.5 11C4.5 14.5899 7.41015 17.5 11 17.5C14.5899 17.5 17.5 14.5899 17.5 11Z"/></svg>
`, At = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.25 7C9.66421 7 10 7.33579 10 7.75C10 8.12656 9.72249 8.4383 9.36083 8.49187L9.25 8.5H7C5.067 8.5 3.5 10.067 3.5 12C3.5 13.864 4.95707 15.3876 6.79435 15.4941L7 15.5H9.25C9.66421 15.5 10 15.8358 10 16.25C10 16.6266 9.72249 16.9383 9.36083 16.9919L9.25 17H7C4.23858 17 2 14.7614 2 12C2 9.32226 4.10496 7.13615 6.75045 7.00612L7 7H9.25ZM17 7C19.7614 7 22 9.23858 22 12C22 14.6777 19.895 16.8638 17.2495 16.9939L17 17H14.75C14.3358 17 14 16.6642 14 16.25C14 15.8734 14.2775 15.5617 14.6392 15.5081L14.75 15.5H17C18.933 15.5 20.5 13.933 20.5 12C20.5 10.136 19.0429 8.6124 17.2057 8.50594L17 8.5H14.75C14.3358 8.5 14 8.16421 14 7.75C14 7.37344 14.2775 7.0617 14.6392 7.00813L14.75 7H17ZM7 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.3797 17.4678 12.6935 17.1018 12.7432L17 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.6203 6.53215 11.3065 6.89823 11.2568L7 11.25Z"/></svg>
`, Lt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0122 2.25C12.7462 2.25846 13.4773 2.34326 14.1937 2.50304C14.5064 2.57279 14.7403 2.83351 14.7758 3.15196L14.946 4.67881C15.0231 5.37986 15.615 5.91084 16.3206 5.91158C16.5103 5.91188 16.6979 5.87238 16.8732 5.79483L18.2738 5.17956C18.5651 5.05159 18.9055 5.12136 19.1229 5.35362C20.1351 6.43464 20.8889 7.73115 21.3277 9.14558C21.4223 9.45058 21.3134 9.78203 21.0564 9.9715L19.8149 10.8866C19.4607 11.1468 19.2516 11.56 19.2516 11.9995C19.2516 12.4389 19.4607 12.8521 19.8157 13.1129L21.0582 14.0283C21.3153 14.2177 21.4243 14.5492 21.3297 14.8543C20.8911 16.2685 20.1377 17.5649 19.1261 18.6461C18.9089 18.8783 18.5688 18.9483 18.2775 18.8206L16.8712 18.2045C16.4688 18.0284 16.0068 18.0542 15.6265 18.274C15.2463 18.4937 14.9933 18.8812 14.945 19.3177L14.7759 20.8444C14.741 21.1592 14.5122 21.4182 14.204 21.4915C12.7556 21.8361 11.2465 21.8361 9.79803 21.4915C9.48991 21.4182 9.26105 21.1592 9.22618 20.8444L9.05736 19.32C9.00777 18.8843 8.75434 18.498 8.37442 18.279C7.99451 18.06 7.5332 18.0343 7.1322 18.2094L5.72557 18.8256C5.43422 18.9533 5.09403 18.8833 4.87678 18.6509C3.86462 17.5685 3.11119 16.2705 2.6732 14.8548C2.57886 14.5499 2.68786 14.2186 2.94485 14.0293L4.18818 13.1133C4.54232 12.8531 4.75147 12.4399 4.75147 12.0005C4.75147 11.561 4.54232 11.1478 4.18771 10.8873L2.94516 9.97285C2.6878 9.78345 2.5787 9.45178 2.67337 9.14658C3.11212 7.73215 3.86594 6.43564 4.87813 5.35462C5.09559 5.12236 5.43594 5.05259 5.72724 5.18056L7.12762 5.79572C7.53056 5.97256 7.9938 5.94585 8.37577 5.72269C8.75609 5.50209 9.00929 5.11422 9.05817 4.67764L9.22824 3.15196C9.26376 2.83335 9.49786 2.57254 9.8108 2.50294C10.5281 2.34342 11.26 2.25865 12.0122 2.25ZM12.0124 3.7499C11.5583 3.75524 11.1056 3.79443 10.6578 3.86702L10.5489 4.84418C10.4471 5.75368 9.92003 6.56102 9.13042 7.01903C8.33597 7.48317 7.36736 7.53903 6.52458 7.16917L5.62629 6.77456C5.05436 7.46873 4.59914 8.25135 4.27852 9.09168L5.07632 9.67879C5.81513 10.2216 6.25147 11.0837 6.25147 12.0005C6.25147 12.9172 5.81513 13.7793 5.0771 14.3215L4.27805 14.9102C4.59839 15.752 5.05368 16.5361 5.626 17.2316L6.53113 16.8351C7.36923 16.4692 8.33124 16.5227 9.12353 16.9794C9.91581 17.4361 10.4443 18.2417 10.548 19.1526L10.657 20.1365C11.5466 20.2878 12.4555 20.2878 13.3451 20.1365L13.4541 19.1527C13.5549 18.2421 14.0828 17.4337 14.876 16.9753C15.6692 16.5168 16.6332 16.463 17.4728 16.8305L18.3772 17.2267C18.949 16.5323 19.4041 15.7495 19.7247 14.909L18.9267 14.3211C18.1879 13.7783 17.7516 12.9162 17.7516 11.9995C17.7516 11.0827 18.1879 10.2206 18.9258 9.67847L19.7227 9.09109C19.4021 8.25061 18.9468 7.46784 18.3748 6.77356L17.4783 7.16737C17.113 7.32901 16.7178 7.4122 16.3187 7.41158C14.849 7.41004 13.6155 6.30355 13.4551 4.84383L13.3462 3.8667C12.9007 3.7942 12.4526 3.75512 12.0124 3.7499ZM11.9997 8.24995C14.0708 8.24995 15.7497 9.92888 15.7497 12C15.7497 14.071 14.0708 15.75 11.9997 15.75C9.92863 15.75 8.2497 14.071 8.2497 12C8.2497 9.92888 9.92863 8.24995 11.9997 8.24995ZM11.9997 9.74995C10.7571 9.74995 9.7497 10.7573 9.7497 12C9.7497 13.2426 10.7571 14.25 11.9997 14.25C13.2423 14.25 14.2497 13.2426 14.2497 12C14.2497 10.7573 13.2423 9.74995 11.9997 9.74995Z"/></svg>
`, zt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.7878 3.10215C11.283 2.09877 12.7138 2.09876 13.209 3.10215L15.567 7.87987L20.8395 8.64601C21.9468 8.80691 22.3889 10.1677 21.5877 10.9487L17.7724 14.6676L18.6731 19.9189C18.8622 21.0217 17.7047 21.8627 16.7143 21.342L11.9984 18.8627L7.28252 21.342C6.29213 21.8627 5.13459 21.0217 5.32374 19.9189L6.2244 14.6676L2.40916 10.9487C1.60791 10.1677 2.05005 8.80691 3.15735 8.64601L8.42988 7.87987L10.7878 3.10215Z"/></svg>
`, Mt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912Z"/></svg>
`, St = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.0258 17.0014C17.2639 21.7851 11.1471 23.4241 6.3634 20.6622C5.06068 19.9101 3.964 18.8926 3.12872 17.6797C2.84945 17.2741 3.0301 16.7141 3.49369 16.5482C7.26112 15.1997 9.27892 13.6372 10.4498 11.4021C11.6825 9.04908 12.001 6.47162 11.1387 2.93862C11.0195 2.45008 11.4053 1.98492 11.9075 2.01186C13.4645 2.09539 14.9856 2.54263 16.3649 3.33903C21.1486 6.10088 22.7876 12.2177 20.0258 17.0014Z"/></svg>
`, It = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75V4.25C12.75 4.66421 12.4142 5 12 5C11.5858 5 11.25 4.66421 11.25 4.25V2.75C11.25 2.33579 11.5858 2 12 2ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12ZM21.25 12.75C21.6642 12.75 22 12.4142 22 12C22 11.5858 21.6642 11.25 21.25 11.25H19.75C19.3358 11.25 19 11.5858 19 12C19 12.4142 19.3358 12.75 19.75 12.75H21.25ZM12 19C12.4142 19 12.75 19.3358 12.75 19.75V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V19.75C11.25 19.3358 11.5858 19 12 19ZM4.25 12.75C4.66421 12.75 5 12.4142 5 12C5 11.5858 4.66421 11.25 4.25 11.25H2.75C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H4.25ZM4.21967 4.22004C4.51256 3.92715 4.98744 3.92715 5.28033 4.22004L6.78033 5.72004C7.07322 6.01294 7.07322 6.48781 6.78033 6.7807C6.48744 7.0736 6.01256 7.0736 5.71967 6.7807L4.21967 5.2807C3.92678 4.98781 3.92678 4.51294 4.21967 4.22004ZM5.28033 19.7807C4.98744 20.0736 4.51256 20.0736 4.21967 19.7807C3.92678 19.4878 3.92678 19.0129 4.21967 18.72L5.71967 17.22C6.01256 16.9271 6.48744 16.9271 6.78033 17.22C7.07322 17.5129 7.07322 17.9878 6.78033 18.2807L5.28033 19.7807ZM19.7803 4.22004C19.4874 3.92715 19.0126 3.92715 18.7197 4.22004L17.2197 5.72004C16.9268 6.01294 16.9268 6.48781 17.2197 6.7807C17.5126 7.0736 17.9874 7.0736 18.2803 6.7807L19.7803 5.2807C20.0732 4.98781 20.0732 4.51294 19.7803 4.22004ZM18.7197 19.7807C19.0126 20.0736 19.4874 20.0736 19.7803 19.7807C20.0732 19.4878 20.0732 19.0129 19.7803 18.72L18.2803 17.22C17.9874 16.9271 17.5126 16.9271 17.2197 17.22C16.9268 17.5129 16.9268 17.9878 17.2197 18.2807L18.7197 19.7807Z"/></svg>
`, Tt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.75 12.6 A5.25 5.25 0 0 1 17.25 12.6 Z"/><g fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="4.4"/><line x1="4.6" y1="4.6" x2="6.6" y2="6.6"/><line x1="19.4" y1="4.6" x2="17.4" y2="6.6"/><line x1="1.9" y1="13.7" x2="22.1" y2="13.7"/><line x1="6.1" y1="16.9" x2="18.2" y2="16.9"/><line x1="10" y1="20" x2="14.1" y2="20"/></g></svg>
`, Et = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.3368 4.9174C17.5191 3.69448 19.4803 3.69717 20.6593 4.92332L27.8322 12.3831C29.155 13.4822 30 15.1428 30 17C30 20.2785 27.3704 22.9429 24.1053 22.9991V23.0004C24.1053 25.2096 22.3144 27.0004 20.1053 27.0004H18C18 27.0004 18 27.0004 18 27.0004V24.5004C18 22.0151 15.9853 20.0004 13.5 20.0004H12C11.4477 20.0004 11 20.4481 11 21.0004C11 21.5527 11.4477 22.0004 12 22.0004H13.5C14.8807 22.0004 16 23.1197 16 24.5004V27.0004C16 27.0004 16 27.0004 16 27.0004L11 27.0004C8.23858 27.0004 6 24.7618 6 22.0004V19.9004C3.71776 19.4371 2 17.4193 2 15.0004C2 12.2389 4.23858 10.0004 7 10.0004C8.63694 10.0004 10.0891 10.7874 11.0003 12.0004H17.5995C17.7351 11.7351 17.8914 11.4823 18.0664 11.2443L16.1624 8.89416C15.2071 7.71502 15.2819 6.00841 16.3368 4.9174Z" fill="currentColor"/>
</svg>
`, Ft = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.5758 24.99L28.2927 29.7068C28.6832 30.0973 29.3164 30.0973 29.7069 29.7068C30.0975 29.3163 30.0974 28.6831 29.7069 28.2926L3.70661 2.29288C3.31608 1.90237 2.68292 1.90237 2.2924 2.2929C1.90188 2.68343 1.90188 3.3166 2.29241 3.70712L9.00318 10.4177C8.39 10.1492 7.71241 10.0001 6.99982 10.0001C4.23839 10.0001 1.99982 12.2386 1.99982 15.0001C1.99982 17.419 3.71758 19.4368 5.99982 19.9001V22.0001C5.99982 24.7615 8.2384 27.0001 10.9998 27.0001H15.9998V24.4997C15.9998 23.119 14.8805 21.9997 13.4998 21.9997H11.9998C11.4475 21.9997 10.9998 21.552 10.9998 20.9997C10.9998 20.4474 11.4475 19.9997 11.9998 19.9997H13.4998C15.9851 19.9997 17.9998 22.0144 17.9998 24.4997V26.9997L20.1051 27.0001C21.5898 27.0001 22.8856 26.1912 23.5758 24.99ZM29.9998 16.9997C29.9998 19.5582 28.3984 21.7427 26.1433 22.6055L15.5377 12.0001H17.5993C17.7349 11.7348 17.8913 11.482 18.0663 11.244L16.1622 8.89386C15.2069 7.71472 15.2818 6.00811 16.3366 4.91709C17.5189 3.69417 19.4801 3.69686 20.6591 4.92302L27.8321 12.3828C29.1549 13.4819 29.9998 15.1425 29.9998 16.9997Z" fill="currentColor"/>
</svg>
`, Ht = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.0003 12.0004H11.8436C11.8956 11.9991 11.9477 11.9984 12 11.9984V12.0004H17.5995C17.7351 11.7351 17.8914 11.4823 18.0664 11.2443L16.1624 8.89416C15.2071 7.71502 15.2819 6.00841 16.3368 4.9174C17.5191 3.69448 19.4803 3.69717 20.6593 4.92332L27.8322 12.3831C29.155 13.4822 30 15.1428 30 17C30 20.2785 27.3704 22.9429 24.1053 22.9991V23.0004C24.1053 25.2096 22.3144 27.0004 20.1053 27.0004H11C8.23858 27.0004 6 24.7618 6 22.0004V19.9004C3.71776 19.4371 2 17.4193 2 15.0004C2 12.2389 4.23858 10.0004 7 10.0004C8.63694 10.0004 10.0891 10.7874 11.0003 12.0004ZM19.2177 6.30954C18.8241 5.9002 18.1693 5.89931 17.7746 6.30756C17.4225 6.67178 17.3975 7.24152 17.7164 7.63516L20.7241 11.3476L20.0662 11.9843C19.6801 12.358 19.3805 12.8187 19.1987 13.3335L18.9631 14.0004H11.8723C9.72227 14.0678 8 15.832 8 17.9984V22.0004C8 23.6573 9.34315 25.0004 11 25.0004H16C16 25.0004 16 25.0004 16 25.0004V24.5004C16 23.1197 14.8807 22.0004 13.5 22.0004H12C11.4477 22.0004 11 21.5527 11 21.0004C11 20.4481 11.4477 20.0004 12 20.0004H13.5C15.9853 20.0004 18 22.0151 18 24.5004V25.0004C18 25.0004 18 25.0004 18 25.0004L20.1053 25.0004C21.2098 25.0004 22.1053 24.105 22.1053 23.0004V20.7233L23.283 20.9361C23.5149 20.978 23.7545 21 24 21C26.2091 21 28 19.2091 28 17C28 15.7472 27.4252 14.6293 26.5211 13.8943L26.4736 13.8557L19.2177 6.30954ZM6.00231 17.8305C6.06168 15.6698 7.26332 13.7945 9.02502 12.7867C8.49077 12.2976 7.77981 12.0004 7 12.0004C5.34315 12.0004 4 13.3435 4 15.0004C4 16.3075 4.83591 17.4193 6.00231 17.8305Z" fill="currentColor"/>
</svg>
`, Pt = {
  info: vt,
  "checkmark-circle": xt,
  warning: kt,
  "error-circle": jt,
  dismiss: Ct,
  search: wt,
  link: At,
  settings: Lt,
  star: zt,
  heart: Mt,
  "weather-moon": St,
  "weather-sunny": It,
  "theme-auto": Tt,
  "animal-rabbit-filled": Et,
  "animal-rabbit-off-filled": Ft,
  "animal-rabbit-regular": Ht
};
function O(l, { size: t = 20, label: e = null } = {}) {
  const i = Pt[l];
  if (!i)
    return "";
  const s = e ? `role="img" aria-label="${e.replace(/"/g, "&quot;")}"` : 'aria-hidden="true"';
  return i.replace("<svg ", `<svg width="${t}" height="${t}" ${s} `);
}
const Vt = "ui-rounded, 'SF Pro Rounded', system-ui, -apple-system, 'Segoe UI', sans-serif", Bt = "system-ui, -apple-system, 'Segoe UI', sans-serif", $t = "ui-monospace, 'SF Mono', Menlo, monospace", F = "oklch(1 0 0)", B = "oklch(0.2609 0.0238 267.11)", at = "oklch(0.5771 0.2152 27.33)", ct = "oklch(0.5779 0.1495 51.54)", $ = "oklch(0.5601 0.1577 249.8)", ht = "oklch(0.5489 0.1374 151.7)", G = "oklch(0.7112 0.1559 250.96)", Dt = {
  background: {
    default: F,
    // page background
    surface: F,
    // raised surface (cards, sheets)
    muted: "oklch(0.9906 0.0017 247.84)",
    // #FBFCFD  input / field rest fill
    neutral: "oklch(0.8884 0 0)",
    // #DADADA  neutral fill (platinum)
    neutralEmphasis: "oklch(0.4676 0 0)",
    // #5A5A5A  strong neutral fill (graphite)
    white: F,
    // explicit white fill
    rose: at,
    amber: ct,
    azure: $,
    mint: ht,
    accent: $
  },
  foreground: {
    default: B,
    // primary text
    muted: "oklch(0.503 0.0269 266.68)",
    // #5D6474  secondary text
    onEmphasis: F,
    // label on a saturated / graphite fill
    onNeutral: B,
    // label on a neutral fill
    onWhite: B,
    // label on the white fill
    onAccent: F
    // label on the accent fill
  },
  border: {
    default: "oklch(0.9439 0.004 286.32)",
    // #ECECEF  hairline
    focus: $
    // focus ring
  },
  shadow: "20, 26, 38"
  // rgb triple, consumed inside rgba()
}, Rt = {
  background: {
    default: "oklch(0.2198 0.006 236.84)",
    // #181B1D
    surface: "oklch(0.2514 0.0163 264.22)",
    // #1E222A
    muted: "oklch(0.288 0.018 262.21)",
    // #262B34
    neutral: "oklch(0.3674 0.0201 266.01)",
    // #3A3F4A  neutral fill + hairline
    neutralEmphasis: "oklch(0.4707 0.0189 266.12)",
    // #565B66
    white: "oklch(0.94 0.0071 268.55)",
    // #E9EBF0
    rose: at,
    amber: ct,
    azure: $,
    mint: ht,
    accent: G
  },
  foreground: {
    default: "oklch(0.9645 0.0054 274.97)",
    // #F2F3F7
    muted: "oklch(0.7595 0.0259 265.54)",
    // #A9B1C2
    onEmphasis: F,
    onNeutral: "oklch(0.9645 0.0054 274.97)",
    // #F2F3F7  light label on a dark neutral fill
    onWhite: B,
    // dark label on the near-white fill
    onAccent: "oklch(0.2514 0.0163 264.22)"
    // #1E222A  card surface, not pure black
  },
  border: {
    default: "oklch(0.3674 0.0201 266.01)",
    // #3A3F4A  shares the neutral step
    focus: G
  },
  shadow: "0, 0, 0"
}, qt = (l) => l.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
function dt(l) {
  const t = {};
  for (const e of ["background", "foreground", "border"])
    for (const [i, s] of Object.entries(l[e]))
      t[`${e}-${qt(i)}`] = s;
  return t.shadow = l.shadow, t;
}
const ut = dt(Dt), Q = dt(Rt), u = ut, S = {
  width: 4.5,
  gap: 0,
  alpha: 0.5
}, X = {
  white: { fill: "background-white", on: "foreground-on-white" },
  rose: { fill: "background-rose", on: "foreground-on-emphasis" },
  amber: { fill: "background-amber", on: "foreground-on-emphasis" },
  azure: { fill: "background-azure", on: "foreground-on-emphasis" },
  mint: { fill: "background-mint", on: "foreground-on-emphasis" },
  platinum: { fill: "background-neutral", on: "foreground-on-neutral" },
  graphite: { fill: "background-neutral-emphasis", on: "foreground-on-emphasis" }
};
`${u["background-accent"]}${u["foreground-on-accent"]}${Object.entries(X).map(
  ([l, { fill: t, on: e }]) => `  :host([variant="${l}"]) { --jelly-fill: var(--jelly-color-${t}, ${u[t]}); --jelly-label: var(--jelly-color-${e}, ${u[e]}); }`
).join(`
`)}`;
function N({ color: l, on: t = null, ring: e = null } = {}) {
  const i = (s) => {
    const r = X[s];
    return [
      l ? `${l}: var(--jelly-color-${r.fill}, ${u[r.fill]});` : "",
      e ? `${e}: var(--jelly-color-${r.fill}, ${u[r.fill]});` : "",
      t ? `${t}: var(--jelly-color-${r.on}, ${u[r.on]});` : ""
    ].filter(Boolean).join(" ");
  };
  return Object.keys(X).map((s) => `  :host([variant="${s}"]) { ${i(s)} }`).join(`
`);
}
function D(l) {
  return Object.entries(l).map(([t, e]) => `  --jelly-color-${t}: ${e};`).join(`
`);
}
function Ot() {
  return `
@layer jelly {
  :root {
    color-scheme: light dark;
    --jelly-font-display: ${Vt};
    --jelly-font-text:    ${Bt};
    --jelly-font-mono:    ${$t};
    --jelly-ring-width:     ${S.width}px;
    --jelly-ring-gap:       ${S.gap}px;
    --jelly-ring-color:     color-mix(in srgb, var(--jelly-ring, var(--jelly-color-border-focus)) ${S.alpha * 100}%, transparent);
    --jelly-shadow-raised:  0 16px 42px -20px rgba(var(--jelly-color-shadow), 0.34);
    --jelly-shadow-overlay: 0 14px 34px -16px rgba(var(--jelly-color-shadow), 0.42), 0 4px 12px -8px rgba(var(--jelly-color-shadow), 0.28);
${D(ut)}
  }

  :root[data-jelly-mode="light"] {
    color-scheme: light;
  }

  :root[data-jelly-mode="dark"] {
    color-scheme: dark;
${D(Q)}
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-jelly-mode="light"]) {
      color-scheme: dark;
${D(Q)}
    }
  }
}
`;
}
function H() {
  if (typeof document > "u" || document.querySelector("style[data-jelly-tokens]"))
    return;
  const l = document.createElement("style");
  l.setAttribute("data-jelly-tokens", ""), l.textContent = Ot(), document.head.appendChild(l);
}
function je(l = "auto") {
  H(), l === "light" || l === "dark" ? document.documentElement.setAttribute("data-jelly-mode", l) : document.documentElement.removeAttribute("data-jelly-mode"), W();
}
function Ce() {
  const l = document.documentElement.getAttribute("data-jelly-mode");
  return l === "dark" ? !0 : l === "light" ? !1 : typeof matchMedia == "function" && matchMedia("(prefers-color-scheme: dark)").matches;
}
function W() {
  window.dispatchEvent(new CustomEvent("jelly-theme-change"));
}
typeof matchMedia == "function" && matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => W());
H();
const Xt = ':host{position:fixed;top:calc(18px + env(safe-area-inset-top,0px));inset-inline-end:calc(18px + env(safe-area-inset-right,0px));z-index:10002;pointer-events:none;--jelly-toast-radius: 999px;--jelly-toast-font-size: 14px}.rail{display:flex;flex-direction:column;gap:10px;align-items:flex-end}:host([position="bottom"]){top:auto;bottom:calc(18px + env(safe-area-inset-bottom,0px))}:host([position="bottom"]) .rail{flex-direction:column-reverse}:host(:dir(rtl)) .rail{align-items:flex-start}.toast{pointer-events:auto;display:flex;align-items:center;gap:11px;cursor:pointer;touch-action:manipulation;background:var(--jelly-color-background-surface);border:1px solid var(--jelly-color-border-default);border-radius:var(--jelly-toast-radius);box-shadow:var(--jelly-shadow-overlay);padding-block:11px;padding-inline-start:14px;padding-inline-end:14px;font:600 var(--jelly-toast-font-size)/1.3 var(--jelly-font-display);color:var(--jelly-color-foreground-default);max-width:min(320px,calc(100vw - 48px))}.dot{width:11px;height:11px;border-radius:50%;flex:0 0 auto}.toast-text{flex:1}.close{flex:0 0 auto;appearance:none;border:0;margin:0;padding:0;width:22px;height:22px;border-radius:50%;background:transparent;color:var(--jelly-color-foreground-muted);cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.close:hover{background:var(--jelly-color-border-default)}.close:focus-visible{outline:2px solid var(--jelly-ring-color);outline-offset:1px}.sr-tone{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}@media(forced-colors:active){.toast{border-color:CanvasText}.dot{border:3px solid CanvasText}}', tt = {
  info: { color: `var(--jelly-color-background-azure, ${u["background-azure"]})`, spoken: "Info" },
  success: { color: `var(--jelly-color-background-mint,  ${u["background-mint"]})`, spoken: "Success" },
  warning: { color: `var(--jelly-color-background-amber, ${u["background-amber"]})`, spoken: "Warning" },
  danger: { color: `var(--jelly-color-background-rose,  ${u["background-rose"]})`, spoken: "Error" }
};
class Zt extends HTMLElement {
  constructor() {
    super(...arguments), this.built = !1;
  }
  // Lifecycle method: Called automatically when the element is appended to the DOM
  connectedCallback() {
    H(), !this.built && (this.built = !0, this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `
      <style>${Xt}</style>

      <div class="rail" aria-live="polite"></div>
    `);
  }
  // Add one toast; returns its element (click or timeout removes it)
  push(t, { tone: e = "info", duration: i = 3500 } = {}) {
    const s = tt[e] || tt.info, r = document.createElement("div");
    r.className = "toast", r.setAttribute("part", "toast"), r.setAttribute("role", "status");
    const n = document.createElement("span");
    n.className = "dot", n.setAttribute("part", "dot"), n.style.background = s.color, n.setAttribute("aria-hidden", "true");
    const o = document.createElement("span");
    o.className = "sr-tone", o.textContent = `${s.spoken}:`;
    const c = document.createElement("span");
    c.className = "toast-text", c.textContent = String(t);
    const a = document.createElement("button");
    a.className = "close", a.setAttribute("part", "close"), a.setAttribute("aria-label", "Dismiss"), a.innerHTML = O("dismiss", { size: 13 }), r.append(n, o, c, a), this.shadowRoot.querySelector(".rail").appendChild(r), ft(r);
    const h = () => mt(r, () => r.remove());
    return i > 0 && setTimeout(h, i), r.addEventListener("click", h), a.addEventListener("click", (d) => {
      d.stopPropagation(), h();
    }), r;
  }
}
customElements.define("jelly-toaster", Zt);
function Nt(l, t) {
  let e = document.querySelector("jelly-toaster");
  return e || (e = document.createElement("jelly-toaster"), document.body.appendChild(e)), e.push(l, t);
}
typeof window < "u" && (window.jellyToast = Nt);
const Y = {
  clickDepthSpring: 115,
  clickDepthDamping: 18,
  insidePressSpring: 92,
  insidePressDamping: 15,
  insideLocalBulgeImpulse: 390,
  insideLocalHoldBulgeForce: 48,
  pressSpring: 76,
  pressDamping: 13,
  holdPressAmount: 0,
  heldCurveSpring: 135,
  heldCurveDamping: 22,
  insideHeldBulgeAmount: 10.8,
  insideHeldHaloAmount: 2.65,
  insideHeldDepthAmount: 0,
  insidePointInfluenceWidth: 38,
  insidePointHaloWidth: 70,
  insidePointEdgeBoost: 0.44,
  outsideHeldDentAmount: 7.2,
  outsideHeldSideBulgeAmount: 1.7,
  outsideHeldDepthAmount: 9.4,
  normalBlendPasses: 3,
  curveTension: 0.68,
  axisDepth: 34,
  axisSpring: 48,
  axisDamping: 11,
  depthImpulse: 420,
  depthBulgeImpulse: 130,
  depthSpring: 76,
  depthDamping: 14,
  depthCoupling: 150,
  maxDepthIn: -26,
  maxDepthOut: 16,
  zRotateSpring: 42,
  zRotateDamping: 12,
  zRotateImpulse: 0.14,
  membraneSpring: 96,
  membraneDamping: 17,
  waveCoupling: 145,
  pressure: 620,
  volumeCorrection: 0.1,
  outsideDentImpulse: 255,
  outsideSideBulgeImpulse: 54,
  outsideOppositeBulgeImpulse: 74,
  rippleWidth: 8,
  outsideHoldForce: 20,
  outsideHoldDepthForce: 52,
  maxDent: 8,
  maxBulge: 24,
  perspective: 390,
  samples: 240
}, Wt = 1 / 58;
function et(l, t, e) {
  const i = b((e - l) / (t - l), 0, 1);
  return i * i * (3 - 2 * i);
}
function f(l, t) {
  return (l + t) % t;
}
function it(l, t, e) {
  const i = Math.abs(l - t);
  return Math.min(i, e - i);
}
function P(l, t) {
  return Math.exp(-(l * l) / (2 * t * t));
}
function Yt(l, t, e, i, s) {
  const r = Math.min(s, e, i), n = Math.abs(l) - (e - r), o = Math.abs(t) - (i - r), c = Math.hypot(Math.max(n, 0), Math.max(o, 0)), a = Math.min(Math.max(n, o), 0);
  return c + a - r;
}
function st(l, t, e, i) {
  const s = l / 2, r = t / 2, n = Math.min(e, s, r), o = [], c = (y, v) => {
    o.push({ x: y, y: v });
  }, a = 48, h = 48;
  function d(y, v, m, w, j) {
    for (let x = j ? 0 : 1; x <= a; x++) {
      const L = x / a;
      c(y + (m - y) * L, v + (w - v) * L);
    }
  }
  function p(y, v, m, w) {
    for (let j = 1; j <= h; j++) {
      const x = m + (w - m) * (j / h);
      c(y + Math.cos(x) * n, v + Math.sin(x) * n);
    }
  }
  d(-s + n, -r, s - n, -r, !0), p(s - n, -r + n, -Math.PI / 2, 0), d(s, -r + n, s, r - n, !1), p(s - n, r - n, 0, Math.PI / 2), d(s - n, r, -s + n, r, !1), p(-s + n, r - n, Math.PI / 2, Math.PI), d(-s, r - n, -s, -r + n, !1), p(-s + n, -r + n, Math.PI, Math.PI * 1.5);
  const g = [0];
  let C = 0;
  for (let y = 0; y < o.length; y++) {
    const v = o[y], m = o[f(y + 1, o.length)];
    C += Math.hypot(m.x - v.x, m.y - v.y), g.push(C);
  }
  const k = [];
  for (let y = 0; y < i; y++) {
    const v = y / i * C;
    let m = 0;
    for (; m < o.length - 1 && g[m + 1] < v; )
      m += 1;
    const w = o[m], j = o[(m + 1) % o.length], x = g[m], L = g[m + 1], pt = Math.max(L - x, 1e-4), _ = (v - x) / pt;
    k.push({
      x: w.x + (j.x - w.x) * _,
      y: w.y + (j.y - w.y) * _,
      nx: 0,
      ny: 0,
      d: 0,
      v: 0,
      z: 0,
      zv: 0
    });
  }
  return _t(k), k;
}
function Kt(l, t) {
  const e = l.length, i = l[f(t - 1, e)], s = l[f(t + 1, e)], r = s.x - i.x, n = s.y - i.y, o = Math.hypot(n, -r) || 1;
  return { nx: n / o, ny: -r / o };
}
function _t(l) {
  const t = l.length;
  let e = l.map((i, s) => Kt(l, s));
  for (let i = 0; i < Y.normalBlendPasses; i++)
    e = e.map((s, r) => {
      const n = e[f(r - 1, t)], o = e[f(r + 1, t)], c = n.nx * 0.22 + s.nx * 0.56 + o.nx * 0.22, a = n.ny * 0.22 + s.ny * 0.56 + o.ny * 0.22, h = Math.hypot(c, a) || 1;
      return { nx: c / h, ny: a / h };
    });
  for (let i = 0; i < t; i++)
    l[i].nx = e[i].nx, l[i].ny = e[i].ny;
}
function R(l) {
  let t = 0;
  for (let e = 0; e < l.length; e++) {
    const i = l[e], s = l[f(e + 1, l.length)];
    t += i.x * s.y - s.x * i.y;
  }
  return Math.abs(t) * 0.5;
}
function q(l, t, e = Y.curveTension) {
  const i = t.length;
  l.beginPath(), l.moveTo(t[0].x, t[0].y);
  for (let s = 0; s < i; s++) {
    const r = t[f(s - 1, i)], n = t[s], o = t[f(s + 1, i)], c = t[f(s + 2, i)], a = n.x + (o.x - r.x) * e / 6, h = n.y + (o.y - r.y) * e / 6, d = o.x - (c.x - n.x) * e / 6, p = o.y - (c.y - n.y) * e / 6;
    l.bezierCurveTo(a, h, d, p, o.x, o.y);
  }
  l.closePath();
}
class K {
  constructor({ width: t, height: e, radius: i, config: s }) {
    this.width = t, this.height = e, this.radius = i ?? Math.min(t, e) / 2, this.config = { ...Y, ...s ?? {} }, this.lean = 0, this.leanAmount = 0, this.membrane = st(t, e, this.radius, this.config.samples), this.state = {
      clickDepth: 0,
      clickDepthV: 0,
      targetClickDepth: 0,
      insidePress: 0,
      insidePressV: 0,
      targetInsidePress: 0,
      press: 0,
      pressV: 0,
      targetPress: 0,
      insideCurveHold: 0,
      insideCurveHoldV: 0,
      targetInsideCurveHold: 0,
      rotateZ: 0,
      rotateZV: 0,
      tiltX: 0,
      tiltXV: 0,
      tiltY: 0,
      tiltYV: 0,
      targetTiltX: 0,
      targetTiltY: 0,
      pointerActive: !1,
      pointerInsideWeight: 0,
      pointerIndex: 0,
      pointerLocalX: 0,
      pointerLocalY: 0
    }, this.baseArea = R(this.getSurfacePoints());
  }
  // Rebuild the ring for a new size, preserving no motion (used on resize)
  resize(t, e, i) {
    this.width = t, this.height = e, this.radius = i ?? Math.min(t, e) / 2, this.membrane = st(t, e, this.radius, this.config.samples), this.baseArea = R(this.getSurfacePoints());
  }
  // Signed distance from a local point to the resting surface
  sdf(t, e) {
    return Yt(t, e, this.width / 2, this.height / 2, this.radius);
  }
  // Index of the membrane point closest to a local coordinate
  nearestMembraneIndex(t, e) {
    let i = 0, s = 1 / 0;
    for (let r = 0; r < this.membrane.length; r++) {
      const n = this.membrane[r], o = t - n.x, c = e - n.y, a = o * o + c * c;
      a < s && (s = a, i = r);
    }
    return i;
  }
  // Kick the membrane outward around a ring index with a gaussian falloff
  addMembraneImpulse(t, e, i) {
    const s = this.membrane.length;
    for (let r = 0; r < s; r++) {
      const n = it(r, t, s);
      this.membrane[r].v += e * P(n, i);
    }
  }
  // Kick the membrane's depth (z) around a ring index with a gaussian falloff
  addDepthImpulse(t, e, i) {
    const s = this.membrane.length;
    for (let r = 0; r < s; r++) {
      const n = it(r, t, s);
      this.membrane[r].zv += e * P(n, i);
    }
  }
  // Bulge the membrane around the pointer with a softer counter-halo
  addInsidePointImpulse(t) {
    for (let e = 0; e < this.membrane.length; e++) {
      const i = this.insidePointInfluence(e);
      this.membrane[e].v += t * (i.local - i.halo * 0.18);
    }
  }
  // Five-tap smoothing of one membrane channel around an index
  smoothedMembraneValue(t, e) {
    const i = this.membrane.length, s = this.membrane[f(t - 2, i)][e], r = this.membrane[f(t - 1, i)][e], n = this.membrane[t][e], o = this.membrane[f(t + 1, i)][e], c = this.membrane[f(t + 2, i)][e];
    return s * 0.06 + r * 0.2 + n * 0.48 + o * 0.2 + c * 0.06;
  }
  // How strongly the pointer's held position affects one membrane point
  insidePointInfluence(t) {
    const e = this.membrane[t], i = e.x - this.state.pointerLocalX, s = e.y - this.state.pointerLocalY, r = Math.hypot(i, s), n = P(r, this.config.insidePointInfluenceWidth), o = P(r, this.config.insidePointHaloWidth), c = b(
      Math.hypot(
        this.state.pointerLocalX / (this.width / 2),
        this.state.pointerLocalY / (this.height / 2)
      ),
      0,
      1
    ), a = 1 + et(0.12, 0.82, c) * this.config.insidePointEdgeBoost;
    return {
      local: n * a,
      halo: Math.max(o - n * 0.34, 0)
    };
  }
  // Sustained bulge / depth offsets while the pointer is held inside
  heldMembraneOffsets(t) {
    const e = this.insidePointInfluence(t);
    return {
      d: this.state.insideCurveHold * (this.config.insideHeldBulgeAmount * e.local - this.config.insideHeldHaloAmount * e.halo),
      z: -this.state.insideCurveHold * this.config.insideHeldDepthAmount * e.local
    };
  }
  // Five-tap smoothing over a plain array of ring values
  smoothArrayValue(t, e) {
    const i = t.length;
    return t[f(e - 2, i)] * 0.06 + t[f(e - 1, i)] * 0.2 + t[e] * 0.48 + t[f(e + 1, i)] * 0.2 + t[f(e + 2, i)] * 0.06;
  }
  /*
   * The current deformed surface. `offset` pushes every point outward along
   * its normal - used to trace a focus ring that follows the same jiggle.
   */
  getSurfacePoints(t = 0) {
    const e = [], i = this.membrane.length, s = new Array(i), r = new Array(i);
    for (let n = 0; n < i; n++) {
      const o = this.heldMembraneOffsets(n);
      s[n] = this.smoothedMembraneValue(n, "d") + o.d, r[n] = this.smoothedMembraneValue(n, "z") + o.z;
    }
    for (let n = 0; n < i; n++) {
      const o = this.membrane[n], c = this.smoothArrayValue(s, n), a = this.smoothArrayValue(r, n), h = this.smoothArrayValue(s, f(n - 1, i)), p = this.smoothArrayValue(s, f(n + 1, i)) - h, g = -o.ny, C = o.nx, k = p * 0.05, y = this.leanAmount === 0 ? 0 : this.lean * b(o.x / (this.width / 2), -1, 1) * this.leanAmount, v = o.x + o.nx * (c + t + y) + g * k, m = o.y + o.ny * (c + t + y) + C * k, w = b(v / (this.width / 2), -1, 1), j = b(m / (this.height / 2), -1, 1), x = -(w * this.state.tiltY + j * this.state.tiltX) * this.config.axisDepth;
      e.push({ x: v, y: m, z: x + a });
    }
    return e;
  }
  // Apply the perspective projection to one surface point
  projectPoint(t) {
    const e = this.config.perspective / (this.config.perspective - t.z);
    return { x: t.x * e, y: t.y * e, z: t.z };
  }
  // Aim the held-press springs at the pointer's current position
  updatePressTargets(t, e, i = 1) {
    this.state.pointerLocalX = t, this.state.pointerLocalY = e;
    const s = this.sdf(t, e), r = (1 - et(-2, 5, s)) * i;
    return this.state.pointerInsideWeight = r, this.state.targetClickDepth = r, this.state.targetInsidePress = r, this.state.targetPress = r * this.config.holdPressAmount, this.state.targetInsideCurveHold = r, { insideWeight: r };
  }
  // Press at a point already in local (shape-centered) coordinates
  pressAtLocal(t, e, i = 1, s = 1) {
    const r = this.nearestMembraneIndex(t, e);
    this.state.pointerIndex = r, this.state.pointerActive = !0;
    const { insideWeight: n } = this.updatePressTargets(t, e, s), o = i * 1.15 * s;
    n > 0.01 && (this.addInsidePointImpulse(this.config.insideLocalBulgeImpulse * n * o), this.state.pressV += 1.9 * n * o);
  }
  // Follow the pointer while it is held down
  moveToLocal(t, e, i = 1) {
    this.state.pointerIndex = this.nearestMembraneIndex(t, e), this.updatePressTargets(t, e, i);
  }
  // A press whose energy comes from the shape center (keyboard activation)
  centerPulse(t = 1) {
    this.pressAtLocal(0, 0, t);
  }
  /*
   * A one-shot squish from the center that settles on its own - for feedback
   * that isn't a sustained press (focus, toggle, grab). Unlike centerPulse it
   * sets no held target, so the body returns to rest and can sleep.
   */
  centerPop(t = 1) {
    this.state.pointerLocalX = 0, this.state.pointerLocalY = 0, this.addInsidePointImpulse(this.config.insideLocalBulgeImpulse * 0.5 * t), this.state.pressV += 0.9 * t;
  }
  /*
   * A one-shot directional jiggle along an axis: the leading edge (normals
   * aligned with the direction) bulges out and the trailing edge tucks in, so
   * the blob stretches the way it's thrown. Used by the sliding controls and
   * jelly-alert's shake.
   */
  stretchAlong(t, e, i = 1) {
    const s = Math.hypot(t, e) || 1, r = t / s, n = e / s, o = this.config.insideLocalBulgeImpulse * 0.42 * i;
    for (const c of this.membrane) {
      const a = c.nx * r + c.ny * n;
      c.v += o * a;
    }
  }
  // A one-shot ripple with no hold (typing feedback, toggles, etc.)
  pulseAt(t, e, i = 1) {
    const s = this.nearestMembraneIndex(t, e);
    this.state.pointerLocalX = t, this.state.pointerLocalY = e, this.addMembraneImpulse(
      s,
      this.config.insideLocalBulgeImpulse * 0.5 * i,
      this.config.rippleWidth * 1.6
    );
  }
  // Let go: clear every held target and give a small parting kick
  release() {
    this.state.pointerActive = !1, this.state.targetClickDepth = 0, this.state.targetInsidePress = 0, this.state.targetPress = 0, this.state.targetInsideCurveHold = 0, this.state.targetTiltX = 0, this.state.targetTiltY = 0, this.state.pointerInsideWeight = 0, this.state.pressV -= 0.55;
  }
  // Advance the whole-body springs (press depth, tilt, rotation) one step
  updateGlobal(t) {
    const e = this.state, i = this.config;
    [e.clickDepth, e.clickDepthV] = z(
      e.clickDepth,
      e.clickDepthV,
      e.targetClickDepth,
      i.clickDepthSpring,
      i.clickDepthDamping,
      t
    ), [e.insidePress, e.insidePressV] = z(
      e.insidePress,
      e.insidePressV,
      e.targetInsidePress,
      i.insidePressSpring,
      i.insidePressDamping,
      t
    ), [e.press, e.pressV] = z(
      e.press,
      e.pressV,
      e.targetPress,
      i.pressSpring,
      i.pressDamping,
      t
    ), [e.insideCurveHold, e.insideCurveHoldV] = z(
      e.insideCurveHold,
      e.insideCurveHoldV,
      e.targetInsideCurveHold,
      i.heldCurveSpring,
      i.heldCurveDamping,
      t
    ), [e.rotateZ, e.rotateZV] = z(
      e.rotateZ,
      e.rotateZV,
      0,
      i.zRotateSpring,
      i.zRotateDamping,
      t
    ), [e.tiltX, e.tiltXV] = z(
      e.tiltX,
      e.tiltXV,
      e.targetTiltX,
      i.axisSpring,
      i.axisDamping,
      t
    ), [e.tiltY, e.tiltYV] = z(
      e.tiltY,
      e.tiltYV,
      e.targetTiltY,
      i.axisSpring,
      i.axisDamping,
      t
    ), e.clickDepth = b(e.clickDepth, 0, 1), e.insidePress = b(e.insidePress, 0, 1), e.press = b(e.press, -0.025, 0.085), e.insideCurveHold = b(e.insideCurveHold, 0, 1), e.rotateZ = b(e.rotateZ, -0.018, 0.018), e.tiltX = b(e.tiltX, -1, 1), e.tiltY = b(e.tiltY, -1, 1);
  }
  // Advance the membrane wave equation one step
  updateMembrane(t) {
    const e = this.membrane.length, i = this.config, s = this.getSurfacePoints(), r = R(s), n = b((this.baseArea - r) / this.baseArea, -0.08, 0.08), o = new Array(e), c = new Array(e);
    for (let h = 0; h < e; h++) {
      const d = this.membrane[h], p = this.membrane[f(h - 1, e)], g = this.membrane[f(h + 1, e)], C = p.d + g.d - 2 * d.d, k = p.z + g.z - 2 * d.z;
      o[h] = -d.d * i.membraneSpring + C * i.waveCoupling - d.v * i.membraneDamping + n * i.pressure, c[h] = -d.z * i.depthSpring + k * i.depthCoupling - d.zv * i.depthDamping;
    }
    if (this.state.pointerActive && this.state.pointerInsideWeight > 0.02)
      for (let h = 0; h < e; h++) {
        const d = this.insidePointInfluence(h);
        o[h] += i.insideLocalHoldBulgeForce * d.local * this.state.pointerInsideWeight, o[h] -= i.insideLocalHoldBulgeForce * 0.18 * d.halo * this.state.pointerInsideWeight;
      }
    for (let h = 0; h < e; h++) {
      const d = this.membrane[h];
      d.v += o[h] * t, d.d += d.v * t, d.zv += c[h] * t, d.z += d.zv * t, d.d = b(d.d, -i.maxDent, i.maxBulge), d.v = b(d.v, -410, 410), d.z = b(d.z, i.maxDepthIn, i.maxDepthOut), d.zv = b(d.zv, -600, 600);
    }
    let a = 0;
    for (const h of this.membrane)
      a += h.d;
    a /= e;
    for (const h of this.membrane)
      h.d -= a * i.volumeCorrection;
  }
  /*
   * Advance the simulation by a frame delta. The delta is split into
   * substeps no longer than MAX_STEP so the integration stays stable on
   * slow frames, low-Hz displays and after background-tab pauses.
   */
  update(t) {
    const e = Math.max(1, Math.ceil(t / Wt)), i = t / e;
    for (let s = 0; s < e; s++)
      this.updateGlobal(i), this.updateMembrane(i);
    this.recoverIfUnstable();
  }
  /*
   * Defensive backstop: if anything ever produced a non-finite number
   * (a zero-sized rebuild, an extreme external mutation), reset all motion
   * instead of painting garbage forever. The clamps make this near
   * impossible, but a physics toy should never be able to wedge the UI.
   */
  recoverIfUnstable() {
    const t = this.state;
    let e = Number.isFinite(t.press) && Number.isFinite(t.clickDepth) && Number.isFinite(t.rotateZ);
    if (e) {
      for (const i of this.membrane)
        if (!Number.isFinite(i.d) || !Number.isFinite(i.v) || !Number.isFinite(i.z) || !Number.isFinite(i.zv)) {
          e = !1;
          break;
        }
    }
    if (!e) {
      for (const i of this.membrane)
        i.d = 0, i.v = 0, i.z = 0, i.zv = 0;
      t.clickDepth = 0, t.clickDepthV = 0, t.insidePress = 0, t.insidePressV = 0, t.press = 0, t.pressV = 0, t.insideCurveHold = 0, t.insideCurveHoldV = 0, t.rotateZ = 0, t.rotateZV = 0, t.tiltX = 0, t.tiltXV = 0, t.tiltY = 0, t.tiltYV = 0;
    }
  }
  // True when the body has essentially stopped moving and nothing is held
  isResting() {
    const t = this.state;
    if (t.pointerActive || Math.abs(t.clickDepth) > 1e-3 || Math.abs(t.insidePress) > 1e-3 || Math.abs(t.insideCurveHold) > 1e-3 || Math.abs(t.rotateZ) > 1e-4 || Math.abs(t.tiltX) > 1e-3 || Math.abs(t.tiltY) > 1e-3)
      return !1;
    for (const e of this.membrane)
      if (Math.abs(e.d) > 0.03 || Math.abs(e.v) > 0.05 || Math.abs(e.z) > 0.03 || Math.abs(e.zv) > 0.05)
        return !1;
    return !0;
  }
}
class Jt {
  constructor() {
    this.active = /* @__PURE__ */ new Set(), this.running = !1, this.lastTime = 0, this.loop = this.loop.bind(this);
  }
  // Add a component to the loop and start it if it was parked
  wake(t) {
    this.active.add(t), this.running || (this.running = !0, this.lastTime = performance.now(), requestAnimationFrame(this.loop));
  }
  // Remove a component from the loop (used on disconnect)
  drop(t) {
    this.active.delete(t);
  }
  // One shared animation frame: step every live component, park when idle.
  // The delta is capped so a background-tab pause never becomes one giant step.
  loop(t) {
    const e = b((t - this.lastTime) / 1e3, 0, 0.033);
    this.lastTime = t;
    for (const i of this.active) {
      let s = !1;
      i.frameDt = e, i.colorEasing = !1;
      try {
        s = i.frame(e);
      } catch (r) {
        console.error("Jelly UI frame error", r);
      }
      !s && !i.colorEasing && this.active.delete(i);
    }
    this.active.size > 0 ? requestAnimationFrame(this.loop) : this.running = !1;
  }
}
const rt = new Jt(), Ut = ":host{display:inline-block;position:relative;box-sizing:border-box;vertical-align:middle;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}:host([hidden]){display:none}.jelly-canvas{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:0}.jelly-content{position:relative;z-index:1;width:100%;height:100%}";
class E extends HTMLElement {
  constructor() {
    super(), this.body = null, this.built = !1, this.dpr = 1, this.cssW = 0, this.cssH = 0, this.config = void 0, this.resizeObserver = null, this.attributeObserver = null, this.focusVisible = !1, this.frameDt = 0, this.colorEasing = !1, this.eased = {}, this.pressPointerId = null, this.keyboardActive = !1, this.onThemeChange = () => {
      this.built && (this.applyShape(), this.onShape()), this.requestFrame();
    }, this.onMotionChange = () => this.requestFrame(), this.onWindowResize = () => this.applyShape(), this.attachShadow({ mode: "open", delegatesFocus: !0 });
  }
  static {
    this.PAD = 48;
  }
  /* ---- Subclass hooks ---------------------------------------------- */
  // Extra CSS (string) for the shadow root
  styles() {
    return "";
  }
  // Interactive markup that sits above the canvas
  content() {
    return "<slot></slot>";
  }
  // Given the measured host size, return the jelly shape to build
  shape(t, e) {
    return { width: t, height: e, radius: Math.min(t, e) / 2 };
  }
  // Resolve the current fill color (the canvas reads the computed token)
  fill() {
    return getComputedStyle(this).getPropertyValue("--jelly-fill").trim() || u["background-accent"];
  }
  // Called once after the shadow DOM and canvas exist. Wire events here.
  onBuilt() {
  }
  // Called whenever the shape (re)builds
  onShape() {
  }
  // One animation step. Return true to keep animating.
  frame(t) {
    return this.defaultFrame(t);
  }
  /* ---- Lifecycle --------------------------------------------------- */
  // Lifecycle method: Called automatically when the element is appended to the DOM
  connectedCallback() {
    H(), M(this), this.built || this.build(), this.observeResize(), this.attributeObserver || (this.attributeObserver = new MutationObserver(() => this.requestFrame()), this.attributeObserver.observe(this, { attributes: !0 })), window.addEventListener("jelly-theme-change", this.onThemeChange), window.addEventListener("jelly-motion-change", this.onMotionChange), window.addEventListener("resize", this.onWindowResize, { passive: !0 }), this.requestFrame();
  }
  // Lifecycle method: Called automatically when the element leaves the DOM
  disconnectedCallback() {
    rt.drop(this), window.removeEventListener("jelly-theme-change", this.onThemeChange), window.removeEventListener("jelly-motion-change", this.onMotionChange), window.removeEventListener("resize", this.onWindowResize), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), this.attributeObserver && (this.attributeObserver.disconnect(), this.attributeObserver = null);
  }
  // True when the user prefers reduced motion (checked live, not cached)
  get reducedMotion() {
    return Z();
  }
  // Render the shadow DOM once and let the subclass wire itself up
  build() {
    this.shadowRoot.innerHTML = `<style>${Ut}${this.styles()}</style><canvas class="jelly-canvas" part="jelly" aria-hidden="true"></canvas><div class="jelly-content">${this.content()}</div>`, this.canvas = this.shadowRoot.querySelector(".jelly-canvas"), this.ctx = this.canvas.getContext("2d"), this.built = !0, this.onBuilt();
  }
  // Rebuild the shape whenever the host's layout size changes
  observeResize() {
    this.resizeObserver || (this.resizeObserver = new ResizeObserver(() => this.applyShape()), this.resizeObserver.observe(this), this.applyShape());
  }
  /*
   * The region the jelly shape occupies, in host-local pixels. Defaults to
   * the whole host; a component can mark an inner element with
   * `data-jelly-box` to render the jelly over just that sub-region
   * (e.g. a checkbox next to its label).
   */
  jellyBox() {
    const t = this.getBoundingClientRect(), e = this.offsetWidth > 0 ? t.width / this.offsetWidth : 1, i = this.offsetHeight > 0 ? t.height / this.offsetHeight : 1, s = e > 1e-3 ? 1 / e : 1, r = i > 1e-3 ? 1 / i : 1, n = this.shadowRoot.querySelector("[data-jelly-box]"), o = n ? n.getBoundingClientRect() : t;
    return {
      width: o.width * s,
      height: o.height * r,
      offsetX: (o.left + o.width / 2 - t.left) * s,
      offsetY: (o.top + o.height / 2 - t.top) * r,
      // Screen coords stay in screen space for pointer → local mapping
      screenX: o.left + o.width / 2,
      screenY: o.top + o.height / 2
    };
  }
  // Size the canvas for the current shape and (re)build the physics body
  applyShape() {
    if (!this.built)
      return;
    const t = this.jellyBox();
    if (t.width < 1 || t.height < 1)
      return;
    const e = this.shape(t.width, t.height), i = this.constructor.PAD, s = e.width + i * 2, r = e.height + i * 2, n = Math.min(window.devicePixelRatio || 1, 3), o = Math.round(s * n), c = Math.round(r * n);
    if (this.canvas.style.left = `${t.offsetX}px`, this.canvas.style.top = `${t.offsetY}px`, !(this.body && this.canvas.width === o && this.canvas.height === c)) {
      this.dpr = n, this.cssW = s, this.cssH = r, this.canvas.style.width = `${s}px`, this.canvas.style.height = `${r}px`, this.canvas.width = o, this.canvas.height = c, this.ctx.setTransform(n, 0, 0, n, 0, 0), this.body ? this.body.resize(e.width, e.height, e.radius) : this.body = new K({
        width: e.width,
        height: e.height,
        radius: e.radius,
        config: this.config
      }), this.onShape();
      try {
        this.frame(0);
      } catch (a) {
        console.error("Jelly UI paint error", a);
      }
      this.requestFrame();
    }
  }
  /*
   * Rebuild the membrane in place after a shape attribute change (e.g. a
   * radius swap) that doesn't resize the box - applyShape would early-return
   * since the canvas pixel size is unchanged, so reshape the body directly.
   */
  reshapeMembrane() {
    if (!this.built || !this.body)
      return;
    const t = this.jellyBox();
    if (t.width < 1 || t.height < 1)
      return;
    const e = this.shape(t.width, t.height);
    this.body.resize(e.width, e.height, e.radius), this.requestFrame();
  }
  /* ---- Rendering --------------------------------------------------- */
  // Wipe the canvas for the next paint
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.cssW, this.cssH);
  }
  /*
   * Paint one body centered in the canvas (with optional pixel offset).
   * Flat solid fill - no gradients or shading.
   */
  paintBody(t, e = {}) {
    const {
      fill: i = this.fill(),
      cx: s = 0,
      cy: r = 0,
      alpha: n = 1,
      ctx: o = this.ctx,
      cssW: c = this.cssW,
      cssH: a = this.cssH,
      ring: h = null,
      scaleX: d = 1,
      scaleY: p = 1,
      border: g = null,
      // Optional per-point post-projection deform (x, y, z) → (x, y, z).
      // Used for effects the physics shouldn't carry, e.g. tapering a
      // slider thumb's tail.
      warp: C = null,
      // Crossfade the fill toward its target instead of snapping (so variant /
      // state changes ease). Components that paint more than one body per frame
      // pass a distinct easeKey per body so their colours don't share a track.
      ease: k = !0,
      easeKey: y = "body"
    } = e, v = k ? this.easeColor(y, i, this.frameDt || 0) : i, m = c / 2 + s, w = a / 2 + r, j = C ? (L) => C(t.projectPoint(L)) : (L) => t.projectPoint(L);
    if (o.save(), o.globalAlpha = n, o.translate(m, w), o.rotate(t.state.rotateZ), (d !== 1 || p !== 1) && o.scale(d, p), h) {
      const L = t.getSurfacePoints(h.gap + h.width / 2).map(j);
      q(o, L), o.lineWidth = h.width, o.strokeStyle = h.color, o.lineJoin = "round", o.stroke();
    }
    const x = t.getSurfacePoints().map(j);
    q(o, x), o.fillStyle = v, o.fill(), g && (q(o, x), o.lineWidth = g.width, o.strokeStyle = g.color, o.lineJoin = "round", o.stroke()), o.restore();
  }
  // The standard frame: advance physics, repaint, sleep when at rest
  defaultFrame(t) {
    const e = this.body;
    return e ? (e.update(t), this.clearCanvas(), this.paintBody(e, { ring: this.focusRing(), border: this.surfaceBorder() }), !e.isResting()) : !1;
  }
  // Border descriptor painted on the jelly surface, else null
  surfaceBorder() {
    return null;
  }
  /* ---- Focus ring -------------------------------------------------- */
  // Ring descriptor when keyboard-focused, else null. Override as needed.
  // Width and gap resolve from --jelly-ring-width / --jelly-ring-gap so the
  // ring geometry is themeable, not only its color.
  focusRing() {
    if (!this.focusVisible)
      return null;
    const t = getComputedStyle(this), e = parseFloat(t.getPropertyValue("--jelly-ring-width")) || S.width, i = parseFloat(t.getPropertyValue("--jelly-ring-gap"));
    return { color: this.ringColor(), width: e, gap: Number.isFinite(i) ? i : S.gap };
  }
  // The focus ring color, softly blended toward transparent - it tracks the
  // component's own --jelly-ring (usually its fill hue) so the ring reads as
  // part of the control rather than a generic blue outline.
  ringColor() {
    const [t, e, i, s] = this.rgbaTuple(
      `var(--jelly-ring, var(--jelly-color-border-focus, ${u["border-focus"]}))`
    );
    return this.colorString([t, e, i, s * S.alpha], { forceAlpha: !0 });
  }
  /*
   * Ease a fill color toward its target so a variant / state change crossfades
   * rather than snapping. Keyed so a component painting several bodies a frame
   * eases each on its own track. Frame-rate independent; settles in ~0.3s and
   * jumps straight to the target under reduced motion or on the first paint.
   * Raises `colorEasing` (read by the engine) so the frame keeps running.
   */
  easeColor(t, e, i) {
    const s = this.rgbaTuple(e), r = this.eased[t];
    if (!r || this.reducedMotion)
      return this.eased[t] = s, this.colorString(s);
    if (Math.abs(s[0] - r[0]) <= 0.4 && Math.abs(s[1] - r[1]) <= 0.4 && Math.abs(s[2] - r[2]) <= 0.4 && Math.abs(s[3] - r[3]) <= 2e-3)
      return this.eased[t] = s, this.colorString(s);
    if (this.colorEasing = !0, i > 0) {
      const o = 1 - Math.exp(-i * 10);
      for (let c = 0; c < 4; c++)
        r[c] += (s[c] - r[c]) * o;
    }
    return this.colorString(r);
  }
  // Resolve a color expression to an [r, g, b, a] tuple. RGB channels use
  // 0–255; alpha uses 0–1. Keeping alpha here prevents short hex colors such
  // as #fff0 from becoming opaque as they pass through canvas animation.
  rgbaTuple(t) {
    const e = this.resolveColor(String(t)), i = e.match(/[\d.]+/g);
    if (!i)
      return [0, 0, 0, 1];
    const s = i.slice(0, 3).map(Number), r = Math.max(0, Math.min(1, Number(i[3] ?? 1))), n = e.startsWith("color(") ? s.map((o) => Math.round(o * 255)) : s;
    return [n[0], n[1], n[2], r];
  }
  // Backward-compatible RGB-only view for calculations that do not need alpha
  rgbTriple(t) {
    return this.rgbaTuple(t).slice(0, 3);
  }
  // Serialize a tuple to a canvas-safe legacy color. Keep opaque colors as
  // rgb() for compactness; rgba() is required whenever transparency matters.
  colorString([t, e, i, s = 1], { forceAlpha: r = !1 } = {}) {
    const n = Math.round(t), o = Math.round(e), c = Math.round(i), a = Math.max(0, Math.min(1, s));
    return !r && a >= 0.9995 ? `rgb(${n}, ${o}, ${c})` : `rgba(${n}, ${o}, ${c}, ${Number(a.toFixed(4))})`;
  }
  // Blend two live CSS color expressions. Shared by controls that animate
  // between semantic off/on colors, including their alpha channels.
  mixColor(t, e, i) {
    const s = this.rgbaTuple(t), r = this.rgbaTuple(e), n = Math.max(0, Math.min(1, i)), o = s.map((c, a) => c + (r[a] - c) * n);
    return this.colorString(o);
  }
  // Resolve a CSS color expression (var(), color-mix(), …) to a concrete sRGB
  // color. The token values are oklch(), and getComputedStyle preserves oklch()
  // in modern browsers - so we wrap the expression in color-mix(in srgb, …) to
  // force the computed value into sRGB (color(srgb …) / rgb()). rgbaTuple reads
  // the channels numerically and would misread a raw oklch triple as RGB.
  resolveColor(t) {
    return this.probe || (this.probe = document.createElement("span"), this.probe.setAttribute("aria-hidden", "true"), this.probe.style.cssText = "position:absolute;width:0;height:0;visibility:hidden;pointer-events:none", this.shadowRoot.appendChild(this.probe)), this.probe.style.color = `color-mix(in srgb, ${t} 100%, transparent)`, getComputedStyle(this.probe).color;
  }
  // Track keyboard-focus (:focus-visible) on an inner control for the ring
  trackFocus(t) {
    t.addEventListener("focus", () => {
      this.focusVisible = t.matches(":focus-visible") || this.matches(":focus-visible"), this.requestFrame();
    }), t.addEventListener("blur", () => {
      this.focusVisible = !1, this.requestFrame();
    });
  }
  // Route host.focus() into an inner shadow control
  useHostFocusTarget(t) {
    t && (this.hostFocusTarget = t, this.syncHostFocusTarget(), this.hostFocusHandler || (this.hostFocusHandler = (e) => {
      e.target !== this || !this.hostFocusTarget || this.shadowRoot?.activeElement || this.hostFocusTarget.focus({ preventScroll: !0 });
    }, this.addEventListener("focus", this.hostFocusHandler)));
  }
  // Keep the inner focus target's tab order in sync with disabled state
  syncHostFocusTarget() {
    this.hostFocusTarget && (this.hostFocusTarget.tabIndex = this.hasAttribute("disabled") ? -1 : 0, this.removeAttribute("tabindex"));
  }
  /* ---- Interaction helpers ----------------------------------------- */
  // Ask the shared engine for animation frames until the body rests
  requestFrame() {
    rt.wake(this);
  }
  // Convert client coords into the body's local (shape-centered) frame
  toLocal(t, e, i = this.body) {
    const s = this.jellyBox(), r = this.getBoundingClientRect(), n = this.offsetWidth > 0 ? r.width / this.offsetWidth : 1, o = this.offsetHeight > 0 ? r.height / this.offsetHeight : 1, c = (t - s.screenX) / (n > 1e-3 ? n : 1), a = (e - s.screenY) / (o > 1e-3 ? o : 1), h = -(i ? i.state.rotateZ : 0), d = Math.cos(h), p = Math.sin(h);
    return { x: c * d - a * p, y: c * p + a * d };
  }
  // Press the jelly at a screen coordinate
  pressAt(t, e, i = 1.12) {
    if (this.reducedMotion || !this.body)
      return;
    const s = this.toLocal(t, e);
    this.body.pressAtLocal(s.x, s.y, i), this.requestFrame();
  }
  // Drag the held press to a new screen coordinate
  moveAt(t, e) {
    if (this.reducedMotion || !this.body)
      return;
    const i = this.toLocal(t, e);
    this.body.moveToLocal(i.x, i.y), this.requestFrame();
  }
  // Release the held press and let the body settle
  releaseBody() {
    this.body && (this.body.release(), this.requestFrame());
  }
  // Sustained center squish (keyboard press-and-hold)
  centerPulse(t = 1) {
    this.reducedMotion || !this.body || (this.body.centerPulse(t), this.requestFrame());
  }
  // One-shot center squish that settles on its own (focus, toggle, grab)
  centerPop(t = 1) {
    this.reducedMotion || !this.body || (this.body.centerPop(t), this.requestFrame());
  }
  /*
   * Wire the standard press feel onto an inner control: pointer presses
   * dent the jelly under the finger and follow it, Enter / Space squish
   * from the center and everything releases cleanly - including pointer
   * capture loss and blur mid-press. Handles one pointer at a time; extra
   * touches are ignored rather than fighting over the membrane.
   */
  wirePress(t, { keyboard: e = !0, disabled: i = () => this.hasAttribute("disabled") } = {}) {
    this.pressPointerId = null, t.addEventListener("pointerdown", (r) => {
      if (!(i() || this.pressPointerId !== null)) {
        this.pressPointerId = r.pointerId;
        try {
          t.setPointerCapture(r.pointerId);
        } catch {
        }
        this.pressAt(r.clientX, r.clientY), T();
      }
    }), t.addEventListener("pointermove", (r) => {
      r.pointerId === this.pressPointerId && this.moveAt(r.clientX, r.clientY);
    });
    const s = (r) => {
      r.pointerId === this.pressPointerId && (this.pressPointerId = null, this.releaseBody());
    };
    t.addEventListener("pointerup", s), t.addEventListener("pointercancel", s), t.addEventListener("lostpointercapture", s), e && (t.addEventListener("keydown", (r) => {
      r.key !== "Enter" && r.key !== " " || this.keyboardActive || r.repeat || i() || (this.keyboardActive = !0, this.centerPulse(1.12), T());
    }), t.addEventListener("keyup", (r) => {
      r.key !== "Enter" && r.key !== " " || (this.keyboardActive = !1, this.releaseBody());
    }), t.addEventListener("blur", () => {
      this.keyboardActive = !1, this.pressPointerId = null, this.releaseBody();
    }));
  }
}
if (typeof document < "u" && typeof MutationObserver == "function") {
  const l = new MutationObserver(() => W());
  l.observe(document.documentElement, { attributes: !0, attributeFilter: ["dir"] }), document.body && l.observe(document.body, { attributes: !0, attributeFilter: ["dir"] });
}
const Gt = ':host{display:block;position:relative;--jelly-alert-padding-block: 15px;--jelly-alert-padding-inline: 16px;--jelly-alert-gap: 12px;--jelly-alert-font-size: 14.5px;--jelly-alert-icon: 22px;--jelly-alert-close: 24px;--jelly-alert-radius: 16px;--tone: var(--jelly-color-background-azure);--jelly-fill: color-mix(in srgb, var(--tone) 15%, var(--jelly-color-background-surface));--jelly-alert-border: color-mix(in srgb, var(--tone) 34%, var(--jelly-color-background-surface));font:500 var(--jelly-alert-font-size)/1.5 var(--jelly-font-text);color:var(--jelly-color-foreground-default)}:host([size="small"]){--jelly-alert-padding-block: 12px;--jelly-alert-padding-inline: 13px;--jelly-alert-gap: 9px;--jelly-alert-font-size: 13px;--jelly-alert-icon: 19px;--jelly-alert-close: 22px;--jelly-alert-radius: 14px}:host([size="large"]){--jelly-alert-padding-block: 18px;--jelly-alert-padding-inline: 20px;--jelly-alert-gap: 14px;--jelly-alert-font-size: 16px;--jelly-alert-icon: 26px;--jelly-alert-close: 28px;--jelly-alert-radius: 18px}:host([tone="success"]){--tone: var(--jelly-color-background-mint)}:host([tone="warning"]){--tone: var(--jelly-color-background-amber)}:host([tone="danger"]){--tone: var(--jelly-color-background-rose)}.box{position:relative;box-sizing:border-box;display:flex;gap:var(--jelly-alert-gap);align-items:flex-start;padding-block:var(--jelly-alert-padding-block);padding-inline:var(--jelly-alert-padding-inline)}.icon{flex:0 0 auto;width:var(--jelly-alert-icon);height:var(--jelly-alert-icon);color:var(--tone);display:inline-flex;align-items:center;justify-content:center;margin-top:1px}.icon svg{width:100%;height:100%;fill:currentColor}.body{flex:1;min-width:0}.body ::slotted(strong){font-weight:750}.close{flex:0 0 auto;appearance:none;border:0;background:transparent;cursor:pointer;touch-action:manipulation;color:var(--jelly-color-foreground-muted);width:var(--jelly-alert-close);height:var(--jelly-alert-close);min-width:24px;min-height:24px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;transition:background-color .12s ease,color .12s ease}.close svg{fill:currentColor}.close:hover{background:var(--jelly-alert-border)}@media(prefers-reduced-motion:reduce){:host-context(html:not([data-jelly-motion="no-preference"])) .close{transition:none}}:host-context([data-jelly-motion="reduce"]) .close{transition:none}.close:focus-visible{outline:2px solid var(--jelly-ring-color);outline-offset:1px}:host(:not([dismissible])) .close{display:none}@media(forced-colors:active){.box{border:1px solid CanvasText;border-radius:var(--jelly-alert-radius)}.close:focus-visible{outline-color:Highlight}}', nt = {
  info: "info",
  success: "checkmark-circle",
  warning: "warning",
  danger: "error-circle"
};
class Qt extends E {
  constructor() {
    super(...arguments), this.shakeT = 0, this.shaking = 0, this.shakeDir = -1;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["tone", "size", "dismissible"];
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    if (this.built)
      switch (t) {
        case "tone":
          this.shadowRoot.querySelector(".jelly-content").innerHTML = this.content(), this.wireClose(), this.requestFrame();
          break;
        case "size":
          this.applyShape();
          break;
        case "dismissible":
          this.wireClose();
          break;
      }
  }
  // Component styles layered over the shared jelly base styles
  styles() {
    return Gt;
  }
  // The interactive markup that sits above the canvas
  content() {
    const t = this.getAttribute("tone") || "info";
    return `
      <div class="box" part="box" role="alert">
        <span class="icon" aria-hidden="true">${O(nt[t] || nt.info)}</span>
        <div class="body"><slot></slot></div>
        <button class="close" part="close" aria-label="Dismiss">${O("dismiss", { size: 14 })}</button>
      </div>`;
  }
  // The banner the physics body takes (radius follows the size token)
  shape(t, e) {
    const i = parseFloat(getComputedStyle(this).getPropertyValue("--jelly-alert-radius")) || 16;
    return { width: t, height: e, radius: Math.min(i, e / 2) };
  }
  // The surface fill resolves through the theme so dark mode recolors it
  fill() {
    return this.resolveColor(`var(--jelly-fill, var(--jelly-color-background-surface, ${u["background-surface"]}))`);
  }
  // Called once after the shadow DOM and canvas exist. Wire events here.
  onBuilt() {
    this.wireClose(), this.reducedMotion || requestAnimationFrame(() => this.centerPop(0.7));
  }
  // Hook up the dismiss button (re-run after tone re-renders the box)
  wireClose() {
    const t = this.shadowRoot.querySelector(".close");
    t && (this.hasAttribute("dismissible") && this.useHostFocusTarget(t), !t.wired && (t.wired = !0, t.addEventListener("click", () => this.dismiss())));
  }
  // A quick left-right jelly shake
  shake() {
    this.reducedMotion || !this.body || (this.shaking = 0.5, this.shakeT = 0, this.requestFrame());
  }
  // Announce the dismissal, then fade out and remove the element
  dismiss() {
    A(this, "dismiss"), this.style.transition = "opacity .18s ease, transform .18s ease", this.style.opacity = "0", this.style.transform = "scale(0.96)", setTimeout(() => this.remove(), 180);
  }
  // One animation step: alternate horizontal flings while shaking
  frame(t) {
    const e = this.body;
    return e ? (this.shaking > 0 && (this.shaking -= t, this.shakeT += t, this.shakeT >= 0.08 && (this.shakeT = 0, this.shakeDir = -this.shakeDir, e.stretchAlong(this.shakeDir, 0, 0.8))), e.update(t), this.clearCanvas(), this.paintBody(e, {
      fill: this.fill(),
      border: { color: this.resolveColor(`var(--jelly-alert-border, var(--jelly-color-border-default, ${u["border-default"]}))`), width: 1 }
    }), this.shaking > 0 || !e.isResting()) : !1;
  }
}
customElements.define("jelly-alert", Qt);
const te = ':host{display:block;position:relative;--jelly-fill: var(--jelly-color-background-surface);--jelly-radius: 22px;--jelly-card-padding-block: 22px;--jelly-card-padding-inline: 24px;--jelly-card-font-size: 15px;color:var(--jelly-color-foreground-default);font:400 var(--jelly-card-font-size)/1.55 var(--jelly-font-text)}:host([size="small"]){--jelly-radius: 18px;--jelly-card-padding-block: 16px;--jelly-card-padding-inline: 18px;--jelly-card-font-size: 13.5px}:host([size="large"]){--jelly-radius: 26px;--jelly-card-padding-block: 28px;--jelly-card-padding-inline: 30px;--jelly-card-font-size: 16.5px}:host([squish]){cursor:pointer}.card{position:relative;box-sizing:border-box;padding-block:var(--jelly-card-padding-block);padding-inline:var(--jelly-card-padding-inline);outline:none;touch-action:manipulation}.card:after{content:"";position:absolute;inset:-2px;border:var(--jelly-ring-width) solid transparent;border-radius:calc(var(--jelly-radius) + 3px);pointer-events:none}@media(forced-colors:active){.card{border:1px solid CanvasText;border-radius:var(--jelly-radius)}.card:focus-visible:after{border-color:Highlight}}::slotted(:first-child){margin-top:0}::slotted(:last-child){margin-bottom:0}';
class ee extends E {
  constructor() {
    super(...arguments), this.pressing = !1, this.squishWired = !1, this.kb = !1;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["squish"];
  }
  // Component styles layered over the shared jelly base styles
  styles() {
    return te;
  }
  // The interactive markup that sits above the canvas
  content() {
    return `<div class="card" part="card" ${this.hasAttribute("squish") ? 'tabindex="0" role="button"' : ""}><slot></slot></div>`;
  }
  // The rounded surface the physics body takes (radius follows the token)
  shape(t, e) {
    const i = parseFloat(getComputedStyle(this).getPropertyValue("--jelly-radius")) || 22;
    return { width: t, height: e, radius: Math.min(i, Math.min(t, e) / 2) };
  }
  // A hairline on the jelly surface, resolved through the theme
  surfaceBorder() {
    return {
      color: this.resolveColor(`var(--jelly-color-border-default, ${u["border-default"]})`),
      width: 1
    };
  }
  // Called once after the shadow DOM and canvas exist. Wire events here.
  onBuilt() {
    this.card = this.shadowRoot.querySelector(".card"), this.reducedMotion || requestAnimationFrame(() => this.centerPop(0.7)), this.syncSquish();
  }
  /*
   * Wire (or unwire) button behavior for squish mode. The card is a div
   * with role="button", so Space/Enter need preventDefault by hand - the
   * shared wirePress helper is for real buttons and would let Space scroll.
   */
  syncSquish() {
    if (!this.card)
      return;
    const t = this.hasAttribute("squish");
    if (t ? (this.card.setAttribute("tabindex", "0"), this.card.setAttribute("role", "button")) : (this.card.removeAttribute("tabindex"), this.card.removeAttribute("role"), this.pressing = !1, this.releaseBody()), !t || this.squishWired)
      return;
    this.squishWired = !0, this.useHostFocusTarget(this.card), this.trackFocus(this.card), this.card.addEventListener("pointerdown", (i) => {
      if (this.hasAttribute("squish")) {
        try {
          this.card.setPointerCapture(i.pointerId);
        } catch {
        }
        this.pressing = !0, this.pressAt(i.clientX, i.clientY, 1), T();
      }
    }), this.card.addEventListener("pointermove", (i) => {
      this.pressing && this.moveAt(i.clientX, i.clientY);
    });
    const e = () => {
      this.pressing && (this.pressing = !1, this.releaseBody());
    };
    this.card.addEventListener("pointerup", e), this.card.addEventListener("pointercancel", e), this.card.addEventListener("keydown", (i) => {
      this.hasAttribute("squish") && (i.key === "Enter" || i.key === " ") && !this.kb && (i.preventDefault(), this.kb = !0, this.centerPulse());
    }), this.card.addEventListener("keyup", () => {
      this.kb && (this.kb = !1, this.releaseBody(), A(this, "click"));
    });
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    t === "squish" && this.syncSquish();
  }
  // Route programmatic host focus onto the card surface
  focus(t) {
    this.card?.focus(t);
  }
}
customElements.define("jelly-card", ee);
const ie = ':host{display:inline-flex;--jelly-checkbox-size: 32px;--jelly-checkbox-gap: 11px;--jelly-checkbox-font-size: 15.5px;--jelly-checkbox-radius: 13px;--jelly-checkbox-stroke-width: 3.4;--jelly-checkbox-mark: var(--jelly-color-background-white);--jelly-fill: var(--jelly-color-background-neutral);--jelly-on: var(--jelly-color-background-accent);--jelly-ring: var(--jelly-on, var(--jelly-color-border-focus));--jelly-label: var(--jelly-color-foreground-muted);font:600 var(--jelly-checkbox-font-size)/1.2 var(--jelly-font-display)}:host([size="small"]),:host([size="sm"]){--jelly-checkbox-size: 28px;--jelly-checkbox-gap: 9px;--jelly-checkbox-font-size: 14px;--jelly-checkbox-radius: 11px;--jelly-checkbox-stroke-width: 3.1}:host([size="medium"]),:host([size="md"]){--jelly-checkbox-size: 32px;--jelly-checkbox-gap: 11px;--jelly-checkbox-font-size: 15.5px;--jelly-checkbox-radius: 13px;--jelly-checkbox-stroke-width: 3.4}:host([size="large"]),:host([size="lg"]){--jelly-checkbox-size: 38px;--jelly-checkbox-gap: 13px;--jelly-checkbox-font-size: 16.5px;--jelly-checkbox-radius: 15px;--jelly-checkbox-stroke-width: 3.7}:host([disabled]){opacity:.5;pointer-events:none}.wrap{display:inline-flex;align-items:center;gap:var(--jelly-checkbox-gap);cursor:pointer;position:relative;touch-action:manipulation}input{position:absolute;inset-inline-start:0;top:50%;width:var(--jelly-checkbox-size);height:var(--jelly-checkbox-size);margin:0;transform:translateY(-50%);opacity:0;cursor:pointer}.box{position:relative;width:var(--jelly-checkbox-size);height:var(--jelly-checkbox-size);flex:0 0 auto}.box:after{content:"";position:absolute;inset:-2px;border:var(--jelly-ring-width) solid transparent;border-radius:var(--jelly-checkbox-radius);pointer-events:none}.mark{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--jelly-checkbox-mark);stroke-width:var(--jelly-checkbox-stroke-width);stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:30;stroke-dashoffset:30;transform:scale(.7);transform-origin:center;opacity:0;transition:stroke-dashoffset .26s cubic-bezier(.65,0,.35,1) .03s,transform .34s cubic-bezier(.3,1.7,.5,1),opacity .12s ease}:host([checked]:not([indeterminate])) .check,:host([indeterminate]) .dash{stroke-dashoffset:0;transform:scale(1);opacity:1}@media(prefers-reduced-motion:reduce){:host-context(html:not([data-jelly-motion="no-preference"])) .mark{transition:opacity .12s ease;stroke-dashoffset:0}}:host-context([data-jelly-motion="reduce"]) .mark{transition:opacity .12s ease;stroke-dashoffset:0}.label{color:var(--jelly-label)}.label:empty{display:none}@media(forced-colors:active){.box{border:1px solid ButtonBorder;border-radius:var(--jelly-checkbox-radius)}.mark{stroke:CanvasText}input:focus-visible+.box:after{border-color:Highlight}}';
class se extends E {
  constructor() {
    super(), this.scale = 1, this.scaleVelocity = 0, this.internals = this.attachInternals();
  }
  static {
    this.formAssociated = !0;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["checked", "disabled", "indeterminate", "label", "size", "value"];
  }
  // Component styles layered over the shared jelly base styles
  styles() {
    return ie + N({ color: "--jelly-on", on: "--jelly-checkbox-mark" });
  }
  // The interactive markup that sits above the canvas
  content() {
    return `
      <label class="wrap" part="wrap">
        <input type="checkbox" part="input" />
        <span class="box" data-jelly-box aria-hidden="true">
          <svg class="mark check" viewBox="0 0 32 32"><path d="M7 17l6 6 12-14" /></svg>
          <svg class="mark dash" viewBox="0 0 32 32"><path d="M9 16h14" /></svg>
        </span>
        <span class="label"><slot></slot></span>
      </label>`;
  }
  // The square the physics body takes - the box region, not the label
  shape(t, e) {
    const i = Math.min(t, e);
    return { width: i, height: i, radius: i * 0.32 };
  }
  // Resolve the box fill for the current state through the live theme tokens
  fill() {
    return this.checked || this.indeterminate ? this.resolveColor(`var(--jelly-on, ${u["background-accent"]})`) : this.resolveColor(`var(--jelly-fill, ${u["background-neutral"]})`);
  }
  // Called once after the shadow DOM and canvas exist. Wire events here.
  onBuilt() {
    this.input = this.shadowRoot.querySelector("input"), this.sync("checked"), this.sync("indeterminate"), this.sync("disabled"), this.sync("label"), this.useHostFocusTarget(this.input), this.trackFocus(this.input), this.input.addEventListener("change", () => {
      this.indeterminate = !1, this.toggleAttribute("checked", this.input.checked), this.syncFormValue(), this.pop(this.input.checked ? 4 : -3), T(), A(this, "change");
    });
  }
  // Kick the scale spring: +v expands (check), -v collapses (uncheck)
  pop(t) {
    this.reducedMotion || (this.scaleVelocity += t, this.requestFrame());
  }
  // One animation step: advance the scale spring and repaint. True keeps animating.
  frame(t) {
    const e = this.body;
    return e ? ([this.scale, this.scaleVelocity] = z(this.scale, this.scaleVelocity, 1, 260, 17, t), this.clearCanvas(), this.paintBody(e, { fill: this.fill(), scaleX: this.scale, scaleY: this.scale, ring: this.focusRing() }), Math.abs(1 - this.scale) > 15e-4 || Math.abs(this.scaleVelocity) > 15e-4) : !1;
  }
  // Report the submitted value: `value` when checked, nothing otherwise
  syncFormValue() {
    this.internals.setFormValue(this.input.checked ? this.value : null);
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    this.input && this.sync(t);
  }
  // Push one observed attribute into the hidden native input
  sync(t) {
    switch (t) {
      case "checked":
        this.input.checked = this.checked, this.syncFormValue(), this.requestFrame();
        break;
      case "indeterminate":
        this.input.indeterminate = this.indeterminate, this.requestFrame();
        break;
      case "value":
        this.syncFormValue();
        break;
      case "disabled":
        this.input.disabled = this.hasAttribute("disabled"), this.syncHostFocusTarget();
        break;
      case "size":
        M(this);
        break;
      case "label": {
        const e = this.getAttribute("label");
        e ? this.input.setAttribute("aria-label", e) : this.input.removeAttribute("aria-label");
        break;
      }
    }
  }
  // Whether the checkbox is currently checked (reflects the attribute)
  get checked() {
    return this.hasAttribute("checked");
  }
  set checked(t) {
    this.toggleAttribute("checked", !!t);
  }
  // Mixed state: shows a dash and reports aria-checked="mixed"; cleared by a user toggle
  get indeterminate() {
    return this.hasAttribute("indeterminate");
  }
  set indeterminate(t) {
    this.toggleAttribute("indeterminate", !!t);
  }
  // The form value submitted while checked (defaults to "on", like native)
  get value() {
    return this.getAttribute("value") || "on";
  }
  set value(t) {
    this.setAttribute("value", String(t));
  }
  // Route programmatic host focus into the hidden native input
  focus(t) {
    this.input?.focus(t);
  }
}
customElements.define("jelly-checkbox", se);
const re = ':host{display:block;flex:1 1 100%;align-self:center;--jelly-divider: var(--jelly-color-border-default);--jelly-divider-font-size: 12px;--jelly-divider-gap: 14px}:host([size="small"]){--jelly-divider-font-size: 11px;--jelly-divider-gap: 10px}:host([size="large"]){--jelly-divider-font-size: 13.5px;--jelly-divider-gap: 18px}:host([direction="vertical"]){display:inline-block;flex:0 0 auto;align-self:stretch;width:auto;min-height:1em}:host([direction="vertical"]:not(:empty)),:host([direction="vertical"][content]){min-width:calc(var(--jelly-divider-font-size) + 2px)}.line{height:1px;background:var(--jelly-divider)}:host([direction="vertical"]) .line{width:1px;height:100%}.labelled{display:flex;align-items:center;gap:var(--jelly-divider-gap);color:var(--jelly-color-foreground-muted);font:600 var(--jelly-divider-font-size)/1 var(--jelly-font-display);letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}.labelled:before,.labelled:after{content:"";flex:1;height:1px;background:var(--jelly-divider)}.labelled.vertical{height:100%;flex-direction:column;justify-content:center}.labelled.vertical:before,.labelled.vertical:after{width:1px;height:auto}.labelled.vertical .label{writing-mode:vertical-rl;text-orientation:mixed}';
class ne extends HTMLElement {
  constructor() {
    super(...arguments), this.built = !1;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["direction", "content", "size"];
  }
  // Lifecycle method: Called automatically when the element is appended to the DOM
  connectedCallback() {
    H(), M(this), !this.built && (this.built = !0, this.setAttribute("role", "separator"), this.attachShadow({ mode: "open" }), this.render());
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    t === "size" && M(this), this.built && this.render();
  }
  // The optional visible text: the content attribute, falling back to slotted
  // text. Exposed as `content` (matching the attribute); `label` stays as an
  // alias, though across the rest of the library `label` means the aria-label.
  get content() {
    return this.getAttribute("content") ?? (this.textContent ?? "").trim();
  }
  get label() {
    return this.content;
  }
  // Rebuild the line (or labelled line) for the current attributes
  render() {
    const t = this.getAttribute("direction") === "vertical", e = this.label;
    t ? this.setAttribute("aria-orientation", "vertical") : this.removeAttribute("aria-orientation"), this.shadowRoot.innerHTML = `
      <style>${re}</style>

      ${e ? `<div class="labelled${t ? " vertical" : ""}"><span class="label">${lt(e)}</span></div>` : '<div class="line"></div>'}
    `;
  }
}
customElements.define("jelly-divider", ne);
const oe = ':host{--jelly-icon-button-size: 48px;--jelly-icon-button-radius: 16px;--jelly-icon-button-font-size: 18px;--jelly-icon-button-icon-size: 20px;--jelly-ring: var(--jelly-fill, var(--jelly-color-border-focus))}:host([disabled]){opacity:.55;pointer-events:none}:host([size="small"]),:host([size="sm"]){--jelly-icon-button-size: 40px;--jelly-icon-button-radius: 13px;--jelly-icon-button-font-size: 16px;--jelly-icon-button-icon-size: 18px}:host([size="medium"]),:host([size="md"]){--jelly-icon-button-size: 48px;--jelly-icon-button-radius: 16px;--jelly-icon-button-font-size: 18px;--jelly-icon-button-icon-size: 20px}:host([size="large"]),:host([size="lg"]){--jelly-icon-button-size: 56px;--jelly-icon-button-radius: 18px;--jelly-icon-button-font-size: 20px;--jelly-icon-button-icon-size: 23px}button{appearance:none;-webkit-appearance:none;border:0;margin:0;padding:0;background:transparent;color:var(--jelly-label);width:var(--jelly-icon-button-size);height:var(--jelly-icon-button-size);display:inline-flex;align-items:center;justify-content:center;font:600 var(--jelly-icon-button-font-size)/1 var(--jelly-font-display);position:relative;cursor:pointer;border-radius:var(--jelly-icon-button-radius);touch-action:manipulation;transition:width .42s cubic-bezier(.4,0,.2,1),height .42s cubic-bezier(.4,0,.2,1)}@media(prefers-reduced-motion:reduce){:host-context(html:not([data-jelly-motion="no-preference"])) button{transition:none}}:host-context([data-jelly-motion="reduce"]) button{transition:none}button:focus-visible{outline:none}button:after{content:"";position:absolute;inset:-2px;border:var(--jelly-ring-width) solid transparent;border-radius:calc(var(--jelly-icon-button-radius) + 2px);pointer-events:none}::slotted(svg){width:var(--jelly-icon-button-icon-size);height:var(--jelly-icon-button-icon-size)}@media(forced-colors:active){button{color:ButtonText}button:focus-visible:after{border-color:Highlight}}', le = ':host{--jelly-fill: var(--jelly-color-background-accent);--jelly-label: var(--jelly-color-foreground-on-accent)}:host([variant="white"]){--jelly-fill: var(--jelly-color-background-white);--jelly-label: var(--jelly-color-foreground-on-white)}:host([variant="rose"]){--jelly-fill: var(--jelly-color-background-rose);--jelly-label: var(--jelly-color-foreground-on-emphasis)}:host([variant="amber"]){--jelly-fill: var(--jelly-color-background-amber);--jelly-label: var(--jelly-color-foreground-on-emphasis)}:host([variant="azure"]){--jelly-fill: var(--jelly-color-background-azure);--jelly-label: var(--jelly-color-foreground-on-emphasis)}:host([variant="mint"]){--jelly-fill: var(--jelly-color-background-mint);--jelly-label: var(--jelly-color-foreground-on-emphasis)}:host([variant="platinum"]){--jelly-fill: var(--jelly-color-background-neutral);--jelly-label: var(--jelly-color-foreground-on-neutral)}:host([variant="graphite"]){--jelly-fill: var(--jelly-color-background-neutral-emphasis);--jelly-label: var(--jelly-color-foreground-on-emphasis)}';
class ae extends E {
  constructor() {
    super(...arguments), this.activationPointerId = null, this.cancelPointerClick = !1;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["disabled", "label", "shape"];
  }
  // Component styles layered over the shared jelly base styles
  styles() {
    return le + oe;
  }
  // The interactive markup that sits above the canvas
  content() {
    return '<button part="button"><slot></slot></button>';
  }
  // The rounded square (default / shape="square") or circle (shape="circle")
  // the physics body takes, inset so the wobble stays inside
  shape(t, e) {
    const i = Math.min(t, e) - 6, s = this.getAttribute("shape") === "circle", r = parseFloat(getComputedStyle(this).getPropertyValue("--jelly-icon-button-radius")), n = s ? i / 2 : Number.isFinite(r) ? Math.min(r, i / 2) : i * 0.32;
    return { width: i, height: i, radius: n };
  }
  // Called once after the shadow DOM and canvas exist. Wire events here.
  onBuilt() {
    this.button = this.shadowRoot.querySelector("button"), this.sync("disabled"), this.sync("label"), this.useHostFocusTarget(this.button), this.trackFocus(this.button), this.preventReleaseOutsideActivation(), this.wirePress(this.button);
  }
  // Pointer capture keeps a drag routed to the button after the pointer leaves
  // it. Cancel the resulting native click unless the release is back inside
  // the button; keyboard-originated clicks are unaffected.
  preventReleaseOutsideActivation() {
    this.button.addEventListener("pointerdown", (e) => {
      this.activationPointerId = e.pointerId, this.cancelPointerClick = !1;
    }), this.button.addEventListener("pointerup", (e) => {
      if (e.pointerId !== this.activationPointerId)
        return;
      const i = this.button.getBoundingClientRect();
      this.cancelPointerClick = e.clientX < i.left || e.clientX > i.right || e.clientY < i.top || e.clientY > i.bottom, this.activationPointerId = null;
    }), this.button.addEventListener("pointercancel", () => {
      this.activationPointerId = null, this.cancelPointerClick = !1;
    });
    const t = (e) => {
      this.cancelPointerClick && (this.cancelPointerClick = !1, e.preventDefault(), e.stopImmediatePropagation());
    };
    this.button.addEventListener("click", t), this.addEventListener("click", t, { capture: !0 });
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    this.button && this.sync(t);
  }
  // Push one observed attribute into the inner native button or the membrane
  sync(t) {
    switch (t) {
      case "disabled":
        this.button.disabled = this.hasAttribute("disabled"), this.syncHostFocusTarget();
        break;
      case "label": {
        const e = this.getAttribute("label");
        e ? this.button.setAttribute("aria-label", e) : this.button.removeAttribute("aria-label");
        break;
      }
      case "shape":
        this.reshapeMembrane();
        break;
    }
  }
  // Route programmatic host focus into the inner native button
  focus(t) {
    this.button?.focus(t);
  }
}
customElements.define("jelly-icon-button", ae);
const ce = ':host{--jelly-input-padding-inline: 20px;--jelly-input-font-size: 16px;--jelly-input-radius: 16px;--jelly-fill: var(--jelly-color-background-muted);--jelly-label: var(--jelly-color-foreground-default);--jelly-accent: var(--jelly-color-background-accent);--jelly-ring: var(--jelly-accent, var(--jelly-color-border-focus));display:inline-block;width:280px;height:56px;font:500 var(--jelly-input-font-size)/1.2 var(--jelly-font-text)}:host([size="small"]),:host([size="sm"]){--jelly-input-padding-inline: 16px;--jelly-input-font-size: 14.5px;--jelly-input-radius: 14px;width:220px;height:46px}:host([size="medium"]),:host([size="md"]){--jelly-input-padding-inline: 20px;--jelly-input-font-size: 16px;--jelly-input-radius: 16px;width:280px;height:56px}:host([size="large"]),:host([size="lg"]){--jelly-input-padding-inline: 24px;--jelly-input-font-size: 17px;--jelly-input-radius: 18px;width:340px;height:64px}:host([disabled]){--jelly-fill: var(--jelly-color-background-neutral);opacity:.55;pointer-events:none}input{position:absolute;inset:0;width:100%;height:100%;box-sizing:border-box;border:0;outline:none;background:transparent;padding-block:0;padding-inline:var(--jelly-input-padding-inline);font:inherit;color:var(--jelly-label);text-align:start;touch-action:manipulation}input::placeholder{color:var(--jelly-color-foreground-muted)}.ring{position:absolute;inset:4px;border:var(--jelly-ring-width) solid transparent;border-radius:var(--jelly-input-radius);pointer-events:none}@media(forced-colors:active){.ring{border-color:FieldText}:host(:focus-within) .ring{border-color:Highlight}}';
class he extends E {
  constructor() {
    super(), this.focused = !1, this.measure = null, this.internals = this.attachInternals();
  }
  static {
    this.formAssociated = !0;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["value", "placeholder", "type", "label", "disabled", "readonly", "autocomplete", "no-autofill", "size"];
  }
  // Component styles layered over the shared jelly base styles
  styles() {
    return ce;
  }
  // The interactive markup that sits above the canvas
  content() {
    return '<input part="input" /><div class="ring" part="ring" aria-hidden="true"></div>';
  }
  // The rounded rectangle the physics body takes, inset so the wobble stays inside the host
  shape(t, e) {
    const i = t - 8, s = e - 8, r = parseFloat(getComputedStyle(this).getPropertyValue("--jelly-input-radius")), n = Number.isFinite(r) ? Math.min(r, s / 2) : Math.min(16, s / 2);
    return { width: i, height: s, radius: n };
  }
  // Resolve the surface color the canvas paints: neutral when disabled,
  // the elevated surface while focused, the resting field fill otherwise
  fill() {
    return this.hasAttribute("disabled") ? this.resolveColor(`var(--jelly-color-background-neutral, ${u["background-neutral"]})`) : this.focused ? this.resolveColor(`var(--jelly-color-background-surface, ${u["background-surface"]})`) : getComputedStyle(this).getPropertyValue("--jelly-fill").trim() || this.resolveColor(`var(--jelly-color-background-muted, ${u["background-muted"]})`);
  }
  // Hairline border on the jelly surface: accent while focused, neutral at rest
  surfaceBorder() {
    return { color: this.focused ? this.resolveColor(`var(--jelly-accent, var(--jelly-color-background-accent, ${u["background-accent"]}))`) : this.resolveColor(`var(--jelly-color-background-neutral, ${u["background-neutral"]})`), width: 1 };
  }
  // Called once after the shadow DOM and canvas exist. Wire events here.
  onBuilt() {
    this.input = this.shadowRoot.querySelector("input"), this.sync("type"), this.sync("value"), this.sync("placeholder"), this.sync("label"), this.sync("readonly"), this.sync("disabled"), this.syncAutofill(), this.useHostFocusTarget(this.input), this.input.addEventListener("focus", this), this.input.addEventListener("blur", this), this.input.addEventListener("input", this), this.input.addEventListener("change", this);
  }
  // Route the inner input's events (registered with `this` as the listener)
  handleEvent(t) {
    switch (t.type) {
      case "focus":
        this.handleFocus();
        break;
      case "blur":
        this.handleBlur();
        break;
      case "input":
        this.handleInput();
        break;
      case "change":
        A(this, "change");
        break;
    }
  }
  // Focus lifts the surface: elevated fill, a soft center pop, a visible ring
  handleFocus() {
    this.focused = !0, this.focusVisible = !0, this.centerPop(0.7), this.requestFrame();
  }
  // Blur settles the surface back to its resting fill
  handleBlur() {
    this.focused = !1, this.focusVisible = !1, this.requestFrame();
  }
  // Mirror the value into the form and ripple the membrane at the caret
  handleInput() {
    if (this.internals.setFormValue(this.input.value), !this.reducedMotion && this.body) {
      const t = this.caretLocalX(), e = this.body.height / 2;
      this.body.pulseAt(t, -e, 0.34), this.body.pulseAt(t, e, 0.34), this.requestFrame();
    }
  }
  /*
   * Apply the autofill posture: no-autofill turns off autocomplete,
   * autocorrect, autocapitalize and spellcheck and sets the opt-out
   * attributes the common password managers respect
   */
  syncAutofill() {
    const t = this.hasAttribute("no-autofill"), e = this.getAttribute("autocomplete");
    this.input.autocomplete = t ? "off" : e || "", this.input.toggleAttribute("data-lpignore", t), this.input.toggleAttribute("data-1p-ignore", t), this.input.toggleAttribute("data-bwignore", t), t ? (this.input.setAttribute("data-form-type", "other"), this.input.setAttribute("autocorrect", "off"), this.input.setAttribute("autocapitalize", "none"), this.input.spellcheck = !1) : (this.input.removeAttribute("data-form-type"), this.input.removeAttribute("autocorrect"), this.input.removeAttribute("autocapitalize"), this.input.removeAttribute("spellcheck"));
  }
  /*
   * The caret's x in the body's local frame (0 = shape center, +x = right).
   * Measures the text advance up to the caret in the input's own font,
   * offsets it by the inline-start padding and the direction-aware scroll,
   * then mirrors the result in RTL - where the inline start is the right
   * edge - so the ripple lands under the caret in either direction.
   */
  caretLocalX() {
    const t = this.input;
    let e;
    try {
      e = t.selectionStart;
    } catch {
      e = null;
    }
    e == null && (e = t.value.length);
    const i = getComputedStyle(t);
    this.measure || (this.measure = document.createElement("canvas").getContext("2d"));
    const s = this.measure;
    s.font = i.font || `${i.fontWeight} ${i.fontSize} ${i.fontFamily}`;
    const r = t.type === "password" ? "•".repeat(e) : t.value.slice(0, e), n = s.measureText(r).width, o = I(this), c = parseFloat(i.paddingInlineStart || (o ? i.paddingRight : i.paddingLeft)) || 0, a = o ? -t.scrollLeft : t.scrollLeft, h = c + n - a, d = o ? t.clientWidth / 2 - h : h - t.clientWidth / 2, p = this.body.width / 2;
    return b(d, -p + 6, p - 6);
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    this.input && this.sync(t);
  }
  // Push one observed attribute into the inner native input
  sync(t) {
    switch (t) {
      case "value":
        this.input.value = this.getAttribute("value") ?? "", this.internals.setFormValue(this.input.value);
        break;
      case "placeholder":
        this.input.placeholder = this.getAttribute("placeholder") ?? "";
        break;
      case "type":
        this.input.type = this.getAttribute("type") || "text";
        break;
      case "label": {
        const e = this.getAttribute("label");
        e ? this.input.setAttribute("aria-label", e) : this.input.removeAttribute("aria-label");
        break;
      }
      case "disabled":
        this.input.disabled = this.hasAttribute("disabled"), this.syncHostFocusTarget(), this.requestFrame();
        break;
      case "readonly":
        this.input.readOnly = this.hasAttribute("readonly");
        break;
      case "autocomplete":
      case "no-autofill":
        this.syncAutofill();
        break;
      case "size":
        M(this);
        break;
    }
  }
  // The current text value (read live from the inner control once built)
  get value() {
    return this.input ? this.input.value : this.getAttribute("value") || "";
  }
  // Set the text value and mirror it into the form
  set value(t) {
    this.input && (this.input.value = t, this.internals.setFormValue(t));
  }
  // Route programmatic host focus into the inner native input
  focus(t) {
    this.input?.focus(t);
  }
}
customElements.define("jelly-input", he);
const de = ':host{display:inline-block;--jelly-label-font-size: 13.5px;--jelly-label-gap: 5px}:host([size="small"]){--jelly-label-font-size: 12px;--jelly-label-gap: 4px}:host([size="large"]){--jelly-label-font-size: 15px;--jelly-label-gap: 6px}label{display:inline-flex;align-items:center;gap:var(--jelly-label-gap);font:650 var(--jelly-label-font-size)/1.3 var(--jelly-font-display);letter-spacing:.01em;color:var(--jelly-color-foreground-default);cursor:default}.required{color:var(--jelly-color-background-rose);font-weight:800}.sr-required{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}:host(:not([required])) .required,:host(:not([required])) .sr-required{display:none}';
class ue extends HTMLElement {
  constructor() {
    super(...arguments), this.built = !1;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["for", "required", "size"];
  }
  // Lifecycle method: Called automatically when the element is appended to the DOM
  connectedCallback() {
    H(), M(this), !this.built && (this.built = !0, this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `
      <style>${de}</style>

      <label part="label">
        <slot></slot>
        <span class="required" aria-hidden="true">*</span>
        <span class="sr-required">(required)</span>
      </label>
    `, this.label = this.shadowRoot.querySelector("label"), this.label.addEventListener("click", () => this.focusTarget()), this.shadowRoot.querySelector("slot").addEventListener("slotchange", () => this.sync()), this.sync());
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    t === "size" && M(this), this.built && this.sync();
  }
  // Resolve the `for` target in this label's own document / shadow root
  get target() {
    const t = this.getAttribute("for");
    return t ? this.getRootNode().getElementById?.(t) ?? document.getElementById(t) : null;
  }
  // Clicking the label focuses the referenced control (cross-root safe)
  focusTarget() {
    this.target?.focus?.();
  }
  /*
   * Give the target an accessible name and required state. Jelly form
   * controls map their `label` attribute to an inner aria-label, which
   * works across shadow roots where aria-labelledby idrefs cannot.
   */
  sync() {
    const t = this.target;
    if (!t)
      return;
    const e = (this.textContent ?? "").trim();
    e && t.localName.startsWith("jelly-") && !t.hasAttribute("label") && t.setAttribute("label", e), this.hasAttribute("required") && (t.ariaRequired = "true");
  }
}
customElements.define("jelly-label", ue);
class pe extends HTMLElement {
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["value", "selected", "disabled"];
  }
  // The submitted value: the value attribute, else the trimmed text content
  get value() {
    return this.hasAttribute("value") ? this.getAttribute("value") ?? "" : (this.textContent ?? "").trim();
  }
  // The human-readable label shown in the trigger and its listbox row
  get label() {
    return (this.textContent ?? "").trim();
  }
  // True when the option cannot be selected
  get disabled() {
    return this.hasAttribute("disabled");
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback() {
    this.closest("jelly-select")?.syncOptions?.();
  }
  // Lifecycle method: Called automatically when the element is appended to the DOM
  connectedCallback() {
    this.style.display = "none", this.closest("jelly-select")?.syncOptions?.();
  }
}
customElements.define("jelly-option", pe);
const ge = ':host{--jelly-select-padding-inline: 18px;--jelly-select-font-size: 15.5px;--jelly-select-radius: 16px;--jelly-select-gap: 10px;--jelly-select-chevron-size: 16px;--jelly-select-row-height: 44px;--jelly-select-row-padding-inline: 14px;--jelly-select-row-radius: 11px;--jelly-fill: var(--jelly-color-background-muted);--jelly-label: var(--jelly-color-foreground-default);--jelly-accent: var(--jelly-color-background-accent);--jelly-ring: var(--jelly-accent, var(--jelly-color-border-focus));display:inline-block;width:240px;height:54px;font:600 var(--jelly-select-font-size)/1.2 var(--jelly-font-text)}:host([size="small"]){--jelly-select-padding-inline: 15px;--jelly-select-font-size: 14px;--jelly-select-radius: 14px;--jelly-select-gap: 8px;--jelly-select-chevron-size: 14px;--jelly-select-row-height: 38px;--jelly-select-row-padding-inline: 12px;--jelly-select-row-radius: 9px;width:210px;height:46px}:host([size="medium"]){--jelly-select-padding-inline: 18px;--jelly-select-font-size: 15.5px;--jelly-select-radius: 16px;--jelly-select-gap: 10px;--jelly-select-chevron-size: 16px;--jelly-select-row-height: 44px;--jelly-select-row-padding-inline: 14px;--jelly-select-row-radius: 11px;width:240px;height:54px}:host([size="large"]){--jelly-select-padding-inline: 22px;--jelly-select-font-size: 16.5px;--jelly-select-radius: 18px;--jelly-select-gap: 11px;--jelly-select-chevron-size: 18px;--jelly-select-row-height: 50px;--jelly-select-row-padding-inline: 16px;--jelly-select-row-radius: 13px;width:280px;height:62px}:host([open]){z-index:var(--jelly-dropdown-z-index, 9999)}:host([disabled]){--jelly-fill: var(--jelly-color-background-neutral);opacity:.55;pointer-events:none}.trigger{appearance:none;border:0;margin:0;background:transparent;color:var(--jelly-label);font:inherit;width:100%;height:100%;padding-block:0;padding-inline:var(--jelly-select-padding-inline);display:flex;align-items:center;gap:var(--jelly-select-gap);cursor:pointer;position:relative;border-radius:var(--jelly-select-radius);text-align:start;touch-action:manipulation}.trigger:after{content:"";position:absolute;inset:4px;border:var(--jelly-ring-width) solid transparent;border-radius:var(--jelly-select-radius);pointer-events:none}.trigger:focus-visible{outline:none}.value{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.value.placeholder{color:var(--jelly-color-foreground-muted)}.chevron{width:var(--jelly-select-chevron-size);height:var(--jelly-select-chevron-size);flex:0 0 auto;transition:transform .22s ease}:host([open]) .chevron{transform:rotate(180deg)}.panel{position:absolute;inset-inline-start:0;top:calc(100% + 10px);z-index:9999;opacity:0;visibility:hidden;pointer-events:none;will-change:opacity}.panel[data-side=top]{top:auto;bottom:calc(100% + 10px)}:host([open]) .panel{pointer-events:auto}.panel-canvas{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none}.panel-mask{position:relative;z-index:1;width:100%;height:100%;border-radius:20px;overflow:hidden;clip-path:inset(0 0 100% 0 round 20px);transition:none;will-change:clip-path}.list{margin:0;padding:8px;box-sizing:border-box;list-style:none;width:100%;height:100%;overflow-y:auto}.row{height:var(--jelly-select-row-height);display:flex;align-items:center;gap:10px;padding-block:0;padding-inline:var(--jelly-select-row-padding-inline);border-radius:var(--jelly-select-row-radius);cursor:pointer;color:var(--jelly-label);white-space:nowrap;touch-action:manipulation;will-change:transform,opacity}.row[aria-selected=true]{font-weight:800}.row.active{background:color-mix(in srgb,var(--jelly-accent, var(--jelly-color-background-accent)) 15%,transparent)}.row .tick{margin-inline-start:auto;width:15px;height:15px;color:var(--jelly-accent);opacity:0}.row[aria-selected=true] .tick{opacity:1}.row[aria-disabled=true]{opacity:.4;cursor:not-allowed}@media(forced-colors:active){.trigger:after{border-color:ButtonText}.trigger:focus-visible:after{border-color:Highlight}.panel-mask{border:1px solid CanvasText;background:Canvas}.row.active{background:Highlight;color:HighlightText}}', be = 8, ot = 10, V = 20, ye = 8;
class fe extends E {
  constructor() {
    super(), this.isOpen = !1, this.focused = !1, this.activeIndex = -1, this.selectedIndex = -1, this.options = [], this.panelSide = "bottom", this.openT = 0, this.openTargetVelocity = 0, this.openTarget = 0, this.panelBody = null, this.panelCssW = 0, this.panelCssH = 0, this.mutationObserver = null, this.reflectingValue = !1, this.typeaheadBuffer = "", this.internals = this.attachInternals(), this.instanceId = bt("jelly-select");
  }
  static {
    this.formAssociated = !0;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["disabled", "label", "placeholder", "size", "value"];
  }
  // Component styles layered over the shared jelly base styles
  styles() {
    return ge + N({ color: "--jelly-accent" });
  }
  // The interactive markup that sits above the canvas
  content() {
    return `
      <button class="trigger" part="trigger" type="button" role="combobox"
              aria-haspopup="listbox" aria-expanded="false"
              aria-controls="${this.instanceId}-list">
        <span class="value placeholder" part="value"></span>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div class="panel" part="panel" data-side="bottom">
        <canvas class="panel-canvas" aria-hidden="true"></canvas>
        <div class="panel-mask" part="panel-mask">
          <ul class="list" id="${this.instanceId}-list" role="listbox" tabindex="-1"></ul>
        </div>
      </div>
      <slot style="display:none"></slot>`;
  }
  // The rounded rectangle the trigger body takes, inset so the wobble stays inside the host
  shape(t, e) {
    const i = t - 8, s = e - 8, r = parseFloat(getComputedStyle(this).getPropertyValue("--jelly-select-radius")), n = Number.isFinite(r) ? Math.min(r, s / 2) : Math.min(16, s / 2);
    return { width: i, height: s, radius: n };
  }
  // Called once after the shadow DOM and canvas exist. Wire events here.
  onBuilt() {
    this.trigger = this.shadowRoot.querySelector(".trigger"), this.valueEl = this.shadowRoot.querySelector(".value"), this.panel = this.shadowRoot.querySelector(".panel"), this.panelMask = this.shadowRoot.querySelector(".panel-mask"), this.panelCanvas = this.shadowRoot.querySelector(".panel-canvas"), this.panelCtx = this.panelCanvas.getContext("2d"), this.list = this.shadowRoot.querySelector(".list"), this.trigger.disabled = this.hasAttribute("disabled"), this.syncLabel(), this.useHostFocusTarget(this.trigger), this.trigger.addEventListener("pointerdown", this), this.trigger.addEventListener("pointerup", this), this.trigger.addEventListener("pointercancel", this), this.trigger.addEventListener("pointerleave", this), this.trigger.addEventListener("click", this), this.trigger.addEventListener("keydown", this), this.trigger.addEventListener("focus", this), this.trigger.addEventListener("blur", this), this.list.addEventListener("pointermove", this), this.list.addEventListener("click", this), this.mutationObserver = new MutationObserver(() => this.syncOptions()), this.mutationObserver.observe(this, { childList: !0, subtree: !0, characterData: !0 }), this.syncOptions();
  }
  // Lifecycle method: Called automatically when the element is appended to the DOM
  connectedCallback() {
    const t = this.built;
    super.connectedCallback(), t && this.mutationObserver && (this.mutationObserver.observe(this, { childList: !0, subtree: !0, characterData: !0 }), this.syncOptions());
  }
  // Lifecycle method: Called automatically when the element leaves the DOM
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver?.disconnect(), document.removeEventListener("pointerdown", this, !0), this.isOpen && (this.isOpen = !1, this.openTarget = 0, this.openT = 0, this.openTargetVelocity = 0, this.removeAttribute("open"), this.trigger?.setAttribute("aria-expanded", "false"), this.trigger?.removeAttribute("aria-activedescendant"));
  }
  // Route events from the trigger, the option list and the document
  handleEvent(t) {
    if (t.currentTarget === document) {
      this.isOpen && !t.composedPath().includes(this) && this.close();
      return;
    }
    const e = t.currentTarget === this.list;
    switch (t.type) {
      case "pointerdown":
        this.pressTrigger(t);
        break;
      case "pointerup":
      case "pointercancel":
      case "pointerleave":
        this.releaseBody();
        break;
      case "pointermove":
        this.onRowHover(t);
        break;
      case "keydown":
        this.onTriggerKey(t);
        break;
      case "focus":
        this.setFocused(!0);
        break;
      case "blur":
        this.setFocused(!1);
        break;
      case "click":
        e ? this.onRowClick(t) : this.toggle();
        break;
    }
  }
  // Dent the trigger surface under the pointer
  pressTrigger(t) {
    this.hasAttribute("disabled") || this.pressAt(t.clientX, t.clientY, 0.9);
  }
  // Track trigger focus so the fill, border and painted ring can respond
  setFocused(t) {
    this.focused = t, this.requestFrame();
  }
  // Rebuild the listbox rows from the light-DOM options and re-derive the selection
  syncOptions() {
    if (!this.list)
      return;
    this.options = [...this.querySelectorAll("jelly-option")];
    const t = this.getAttribute("value"), e = t != null && t !== "";
    let i = -1;
    this.options.forEach((s, r) => {
      (e ? s.value === t : s.hasAttribute("selected")) && (i = r);
    }), this.selectedIndex = i, this.list.innerHTML = this.options.map((s, r) => {
      const n = r === this.selectedIndex;
      return `
          <li class="row" id="${this.instanceId}-opt${r}" role="option" data-index="${r}"
              aria-selected="${n}" ${s.disabled ? 'aria-disabled="true"' : ""}>
            <span class="row-label">${lt(s.label)}</span>
            <svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 13l4 4 10-11" />
            </svg>
          </li>`;
    }).join(""), this.renderValue(), this.sizePanel();
  }
  // Show the selected label (or the placeholder) and mirror the value into the form
  renderValue() {
    const t = this.options[this.selectedIndex];
    t ? (this.valueEl.textContent = t.label, this.valueEl.classList.remove("placeholder"), this.internals.setFormValue(t.value)) : (this.valueEl.textContent = this.getAttribute("placeholder") || "Select…", this.valueEl.classList.add("placeholder"), this.internals.setFormValue(null));
  }
  // Size the panel, its canvas and the panel physics body to fit the options
  sizePanel() {
    const e = this.getBoundingClientRect().width || 240, i = Math.min(this.options.length, 6), s = this.rowHeight, r = i * s + be * 2;
    this.panel.style.width = `${e}px`, this.panel.style.height = `${r}px`;
    const n = 16, o = e + n * 2, c = r + n * 2, a = Math.min(window.devicePixelRatio || 1, 3);
    this.panelCssW = o, this.panelCssH = c, this.panelCanvas.style.width = `${o}px`, this.panelCanvas.style.height = `${c}px`, this.panelCanvas.style.left = `${e / 2}px`, this.panelCanvas.style.top = `${r / 2}px`, this.panelCanvas.width = Math.round(o * a), this.panelCanvas.height = Math.round(c * a), this.panelCtx.setTransform(a, 0, 0, a, 0, 0), this.panelBody ? this.panelBody.resize(e, r, V) : this.panelBody = new K({ width: e, height: r, radius: V });
  }
  // The current row height in px, read from the size-scaled token
  get rowHeight() {
    return parseFloat(getComputedStyle(this).getPropertyValue("--jelly-select-row-height")) || 44;
  }
  /*
   * Collision handling: measure the viewport room around the trigger and
   * anchor the panel below when it fits, above when it would clip and there
   * is room overhead - the same flip rule placeAnchored() uses. The chosen
   * side lands in data-side, which re-anchors the panel in CSS and frame()
   * mirrors the clip reveal, the row stagger and the canvas scale origin so
   * the surface always unfolds away from the trigger edge.
   */
  placePanel() {
    const t = this.getBoundingClientRect(), e = this.panel.offsetHeight || parseFloat(this.panel.style.height) || 0, i = t.bottom + ot + e > window.innerHeight - ye, s = t.top - ot - e > 0;
    this.panelSide = i && s ? "top" : "bottom", this.panel.setAttribute("data-side", this.panelSide);
  }
  // Flip between open and closed
  toggle() {
    this.isOpen ? this.close() : this.openPanel();
  }
  // Open the panel on the side with room and let the surface unfold
  openPanel() {
    if (!(this.isOpen || !this.options.length)) {
      if (this.sizePanel(), this.placePanel(), this.isOpen = !0, this.setAttribute("open", ""), this.trigger.setAttribute("aria-expanded", "true"), this.activeIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0, this.renderActive(), this.openTarget = 1, !this.reducedMotion && this.panelBody) {
        const t = this.panelSide === "top" ? this.panelBody.height / 2 : -this.panelBody.height / 2;
        this.panelBody.centerPop(1.2), this.panelBody.pulseAt(0, t, 0.8);
      }
      document.addEventListener("pointerdown", this, !0), T(), this.requestFrame();
    }
  }
  // Close the panel and hand focus back to the trigger
  close() {
    this.isOpen && (this.isOpen = !1, this.openTarget = 0, this.removeAttribute("open"), this.trigger.setAttribute("aria-expanded", "false"), this.trigger.removeAttribute("aria-activedescendant"), document.removeEventListener("pointerdown", this, !0), this.trigger.focus(), this.requestFrame());
  }
  // Highlight the active row and point aria-activedescendant at it
  renderActive() {
    const t = [...this.list.children];
    t.forEach((i, s) => i.classList.toggle("active", s === this.activeIndex));
    const e = t[this.activeIndex];
    e && (this.trigger.setAttribute("aria-activedescendant", e.id), e.scrollIntoView({ block: "nearest" }));
  }
  // Step the active row by delta, wrapping and skipping disabled options
  moveActive(t) {
    const e = this.options.length;
    if (!e)
      return;
    let i = this.activeIndex;
    for (let s = 0; s < e && (i = (i + t + e) % e, !!this.options[i].disabled); s++)
      ;
    this.activeIndex = i, this.renderActive();
  }
  // Commit a selection: reflect it, re-render, close and notify listeners
  selectIndex(t) {
    const e = this.options[t];
    !e || e.disabled || (this.options.forEach((i) => i.removeAttribute("selected")), e.setAttribute("selected", ""), this.selectedIndex = t, this.reflectValue(e.value), [...this.list.children].forEach((i, s) => i.setAttribute("aria-selected", String(s === t))), this.renderValue(), this.close(), T(), A(this, "change"));
  }
  // Mirror the current value into the value attribute without re-entering sync
  reflectValue(t) {
    this.reflectingValue = !0, t == null || t === "" ? this.removeAttribute("value") : this.setAttribute("value", t), this.reflectingValue = !1;
  }
  // Deselect every option and fall back to the placeholder
  clearSelection() {
    this.options.forEach((t) => t.removeAttribute("selected")), this.selectedIndex = -1, this.reflectValue(""), [...this.list.children].forEach((t) => t.setAttribute("aria-selected", "false")), this.renderValue(), this.requestFrame();
  }
  // Select the option whose value matches; unknown values are ignored
  setValue(t) {
    const e = t == null ? "" : String(t);
    if (!e) {
      this.clearSelection();
      return;
    }
    const i = this.options.findIndex((s) => s.value === e);
    i < 0 || (this.options.forEach((s, r) => s.toggleAttribute("selected", r === i)), this.selectedIndex = i, this.reflectValue(e), [...this.list.children].forEach((s, r) => s.setAttribute("aria-selected", String(r === i))), this.renderValue(), this.requestFrame());
  }
  // Keyboard on the trigger: closed it opens; open it navigates and selects
  onTriggerKey(t) {
    if (!this.hasAttribute("disabled")) {
      if (!this.isOpen) {
        ["ArrowDown", "ArrowUp", "Enter", " "].includes(t.key) && (t.preventDefault(), this.openPanel());
        return;
      }
      switch (t.key) {
        case "ArrowDown":
          t.preventDefault(), this.moveActive(1);
          break;
        case "ArrowUp":
          t.preventDefault(), this.moveActive(-1);
          break;
        case "Home":
          t.preventDefault(), this.activeIndex = -1, this.moveActive(1);
          break;
        case "End":
          t.preventDefault(), this.activeIndex = 0, this.moveActive(-1);
          break;
        case "Enter":
        case " ":
          t.preventDefault(), this.selectIndex(this.activeIndex);
          break;
        case "Escape":
          t.preventDefault(), this.close();
          break;
        case "Tab":
          this.close();
          break;
        default:
          t.key.length === 1 && !t.ctrlKey && !t.metaKey && !t.altKey && this.typeahead(t.key);
      }
    }
  }
  // Accumulate typed characters and move the active row to the first enabled
  // option whose label starts with the buffer (case-insensitive)
  typeahead(t) {
    clearTimeout(this.typeaheadTimer), this.typeaheadTimer = setTimeout(() => {
      this.typeaheadBuffer = "";
    }, 500), this.typeaheadBuffer = (this.typeaheadBuffer || "") + t.toLowerCase();
    const e = this.options.length;
    if (e === 0)
      return;
    const s = ((this.typeaheadBuffer.length === 1 ? this.activeIndex + 1 : this.activeIndex) % e + e) % e;
    for (let r = 0; r < e; r++) {
      const n = (s + r) % e, o = this.options[n];
      if (!o.disabled && o.label.toLowerCase().startsWith(this.typeaheadBuffer)) {
        this.activeIndex = n, this.renderActive();
        return;
      }
    }
  }
  // Pointer movement over the list makes the hovered row active
  onRowHover(t) {
    const e = t.target.closest(".row");
    if (!e)
      return;
    const i = Number(e.dataset.index);
    i !== this.activeIndex && (this.activeIndex = i, this.renderActive());
  }
  // A click on a row selects it
  onRowClick(t) {
    const e = t.target.closest(".row");
    e && this.selectIndex(Number(e.dataset.index));
  }
  // Resolve the trigger surface color: platinum when disabled, the elevated
  // surface while focused or open, the resting field fill otherwise
  fill() {
    return this.hasAttribute("disabled") ? this.resolveColor(`var(--jelly-color-background-neutral, ${u["background-neutral"]})`) : this.focused || this.isOpen ? this.resolveColor(`var(--jelly-color-background-surface, ${u["background-surface"]})`) : getComputedStyle(this).getPropertyValue("--jelly-fill").trim() || this.resolveColor(`var(--jelly-color-background-muted, ${u["background-muted"]})`);
  }
  /*
   * Show the painted ring whenever the trigger is focused or the panel is
   * open - including pointer focus - so the dropdown gets the same ring as
   * jelly-input rather than only lighting up on keyboard (:focus-visible) focus
   */
  focusRing() {
    return !this.focused && !this.isOpen ? null : { color: this.ringColor(), width: S.width, gap: S.gap };
  }
  // Hairline border on the trigger surface: accent while focused or open
  surfaceBorder() {
    return { color: this.focused || this.isOpen ? this.resolveColor(`var(--jelly-accent, var(--jelly-color-background-accent, ${u["background-accent"]}))`) : this.resolveColor(`var(--jelly-color-background-neutral, ${u["background-neutral"]})`), width: 1 };
  }
  // One animation step: trigger body, unfold spring, panel body, row reveal
  frame(t) {
    const e = this.body;
    if (!e)
      return !1;
    e.update(t), this.clearCanvas(), this.paintBody(e, {
      fill: this.fill(),
      ring: this.focusRing(),
      border: this.surfaceBorder(),
      easeKey: "trigger"
    });
    let i = !e.isResting();
    if (this.reducedMotion)
      this.openT = this.openTarget, this.openTargetVelocity = 0;
    else {
      const a = (this.openTarget - this.openT) * 210 - this.openTargetVelocity * 16;
      this.openTargetVelocity += a * t, this.openT += this.openTargetVelocity * t;
    }
    const s = this.openT, r = b(s, 0, 1), n = this.openTarget === 1 || s > 0.02, o = this.panelSide === "top";
    if (this.panel) {
      this.panel.style.visibility = n ? "visible" : "hidden", this.panel.style.opacity = String(b(s * 2, 0, 1));
      const a = (1 - r) * 100;
      this.panelMask.style.clipPath = o ? `inset(${a}% 0 0 0 round ${V}px)` : `inset(0 0 ${a}% 0 round ${V}px)`;
      const h = this.list.children;
      for (let d = 0; d < h.length; d++) {
        const p = o ? h.length - 1 - d : d, g = b((s - 0.12) * 1.7 - p * 0.05, 0, 1);
        h[d].style.opacity = String(g), h[d].style.transform = `translateY(${(o ? -7 : 7) * (1 - g)}px)`;
      }
    }
    if (this.panelBody && n) {
      this.panelBody.update(t), this.panelCtx.clearRect(0, 0, this.panelCssW, this.panelCssH);
      const a = this.panelBody.height, h = Math.max(0.02, s), d = (1 - h) * a / 2;
      this.paintBody(this.panelBody, {
        fill: this.resolveColor(`var(--jelly-color-background-surface, ${u["background-surface"]})`),
        border: { color: this.resolveColor(`var(--jelly-color-background-neutral, ${u["background-neutral"]})`), width: 1 },
        ctx: this.panelCtx,
        cssW: this.panelCssW,
        cssH: this.panelCssH,
        cy: o ? d : -d,
        scaleX: 1 + (1 - r) * 0.05,
        scaleY: h,
        easeKey: "panel"
      });
    }
    const c = Math.abs(this.openTarget - s) > 1e-3 || Math.abs(this.openTargetVelocity) > 1e-3;
    return i = i || c || n && this.panelBody !== null && !this.panelBody.isResting(), i;
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    this.reflectingValue || this.sync(t, this.getAttribute(t));
  }
  // Push one observed attribute into the rendered control
  sync(t, e) {
    switch (t) {
      case "placeholder":
        this.valueEl && this.renderValue();
        break;
      case "label":
        this.syncLabel();
        break;
      case "disabled":
        if (!this.trigger)
          break;
        this.trigger.disabled = this.hasAttribute("disabled"), this.hasAttribute("disabled") && (this.focused = !1), this.syncHostFocusTarget(), this.requestFrame();
        break;
      case "size":
        M(this), this.panel && (this.sizePanel(), this.requestFrame());
        break;
      case "value":
        this.list && this.setValue(e);
        break;
    }
  }
  // Mirror the label attribute onto the trigger as its accessible name
  syncLabel() {
    if (!this.trigger)
      return;
    const t = this.getAttribute("label");
    t ? this.trigger.setAttribute("aria-label", t) : this.trigger.removeAttribute("aria-label");
  }
  // The selected option's value ('' when nothing is selected)
  get value() {
    const t = this.options[this.selectedIndex];
    return t ? t.value : "";
  }
  // Select the option whose value matches (empty clears the selection)
  set value(t) {
    this.setValue(t);
  }
  // Route programmatic host focus onto the trigger button
  focus(t) {
    this.trigger?.focus(t);
  }
}
customElements.define("jelly-select", fe);
const me = ':host{--jelly-slider-track-height: 12px;--jelly-track: var(--jelly-color-background-neutral);--jelly-accent: var(--jelly-color-background-accent);--jelly-ring: var(--jelly-accent, var(--jelly-color-border-focus));display:inline-block;width:240px;height:36px;outline:none}:host([size="small"]){--jelly-slider-track-height: 9px;width:200px;height:30px}:host([size="medium"]){--jelly-slider-track-height: 12px;width:240px;height:36px}:host([size="large"]){--jelly-slider-track-height: 14px;width:300px;height:44px}:host([disabled]){opacity:.5;pointer-events:none}.wrap{position:relative;width:100%;height:100%}input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;pointer-events:none}.track{position:absolute;inset-inline:0;top:50%;transform:translateY(-50%);height:var(--jelly-slider-track-height);touch-action:none}.track:before{content:"";position:absolute;inset-inline:0;top:50%;transform:translateY(-50%);height:max(100%,24px)}@media(forced-colors:active){.jelly-canvas,.track{display:none}input{opacity:1;pointer-events:auto}}', ve = {
  small: { width: 200, height: 30, thumb: 24, track: 9 },
  medium: { width: 240, height: 36, thumb: 28, track: 12 },
  large: { width: 300, height: 44, thumb: 34, track: 14 }
}, xe = {
  membraneSpring: 82,
  membraneDamping: 14,
  waveCoupling: 170,
  pressure: 700,
  volumeCorrection: 0.14,
  insideLocalBulgeImpulse: 330,
  rippleWidth: 10
};
class ke extends E {
  constructor() {
    super(), this.thumbBody = null, this.thumbX = 0, this.thumbXVelocity = 0, this.thumbTarget = 0, this.dragging = !1, this.pointerId = null, this.pressScale = 1, this.pressScaleVelocity = 0, this.trackW = 0, this.trackH = 0, this.internals = this.attachInternals();
  }
  static {
    this.formAssociated = !0;
  }
  // Tells the browser to trigger attributeChangedCallback when these attributes change
  static get observedAttributes() {
    return ["value", "min", "max", "step", "label", "disabled", "size"];
  }
  // Component styles layered over the shared jelly base styles
  styles() {
    return me + N({ color: "--jelly-accent" });
  }
  // The interactive markup that sits above the canvas
  content() {
    return `
      <div class="wrap" part="wrap">
        <input type="range" part="input" />
        <span class="track" part="track" data-jelly-box aria-hidden="true"></span>
      </div>`;
  }
  // The base jelly body is the track capsule; the thumb body rides on top
  shape(t, e) {
    const i = e || this.sizeConfig.track;
    return { width: t, height: i, radius: i / 2 };
  }
  // The canonical size name, defaulting to medium
  get sizeKey() {
    const t = (this.getAttribute("size") || "medium").toLowerCase();
    return t === "small" || t === "large" ? t : "medium";
  }
  // The geometry record for the current size
  get sizeConfig() {
    return ve[this.sizeKey];
  }
  // Called once after the shadow DOM and canvas exist. Wire events here.
  onBuilt() {
    this.input = this.shadowRoot.querySelector("input"), this.track = this.shadowRoot.querySelector(".track"), this.input.min = this.getAttribute("min") ?? "0", this.input.max = this.getAttribute("max") ?? "100", this.input.step = this.getAttribute("step") ?? "1", this.input.value = this.getAttribute("value") ?? "50", this.input.disabled = this.hasAttribute("disabled"), this.syncLabel(), this.syncA11y(), this.internals.setFormValue(this.input.value), this.trackFocus(this.input), this.input.addEventListener("input", this), this.input.addEventListener("keydown", this), this.track.addEventListener("pointerdown", this), this.track.addEventListener("pointermove", this), this.track.addEventListener("pointerup", this), this.track.addEventListener("pointercancel", this);
  }
  // Route the inner-control events registered with `this` as the listener
  handleEvent(t) {
    switch (t.type) {
      case "input":
        this.updateFromInput();
        break;
      case "keydown":
        this.onKey(t);
        break;
      case "pointerdown":
        this.onDown(t);
        break;
      case "pointermove":
        this.onMove(t);
        break;
      case "pointerup":
      case "pointercancel":
        this.onUp(t);
        break;
    }
  }
  // Rebuild the thumb body whenever the track shape (re)builds
  onShape() {
    this.trackW = this.body ? this.body.width : this.getBoundingClientRect().width, this.trackH = this.body ? this.body.height : this.sizeConfig.track;
    const t = this.sizeConfig.thumb;
    this.thumbBody ? this.thumbBody.resize(t, t, t / 2) : this.thumbBody = new K({ width: t, height: t, radius: t / 2, config: xe }), this.thumbTarget = this.valueToX(), this.thumbX = this.thumbTarget, this.thumbXVelocity = 0;
  }
  // How far the thumb center can travel along the track, in pixels
  get travel() {
    return Math.max(0, this.trackW - this.sizeConfig.thumb);
  }
  // The current value as a 0..1 fraction of the min → max span
  fraction() {
    const t = +this.input.min, i = +this.input.max - t || 1;
    return (this.input.valueAsNumber - t) / i;
  }
  // The thumb's physical canvas x for the current value - mirrored in RTL,
  // where the value origin sits at the right edge
  valueToX() {
    const t = -this.travel / 2 + this.fraction() * this.travel;
    return I(this) ? -t : t;
  }
  // Reflect the input's value into the thumb target, ARIA and the form
  updateFromInput() {
    this.thumbTarget = this.valueToX(), this.syncA11y(), this.internals.setFormValue(this.input.value), this.requestFrame();
  }
  // Map the label attribute onto the hidden input's accessible name
  syncLabel() {
    const t = this.getAttribute("label");
    t ? this.input.setAttribute("aria-label", t) : this.input.removeAttribute("aria-label");
  }
  // Keep the hidden input's tab order and ARIA value state in sync
  syncA11y() {
    const t = this.hasAttribute("disabled");
    this.input.tabIndex = t ? -1 : 0, this.removeAttribute("tabindex"), this.input.setAttribute("aria-valuemin", this.input.min), this.input.setAttribute("aria-valuemax", this.input.max), this.input.setAttribute("aria-valuenow", this.input.value), this.input.setAttribute("aria-disabled", String(t));
  }
  // Set the value from a pointer position, honoring reading direction
  setFromClientX(t) {
    const e = this.toLocal(t, 0), i = this.travel / 2 || 1;
    let s = b((e.x + i) / (i * 2), 0, 1);
    I(this) && (s = 1 - s);
    const r = +this.input.min, n = +this.input.max;
    this.input.value = String(r + s * (n - r)), this.updateFromInput(), A(this, "input");
  }
  // Step the value by direction × step (× the Shift multiplier), clamped
  setFromStep(t, e = 1) {
    const i = +this.input.min || 0, s = +this.input.max || 100, r = s - i || 1, n = parseFloat(this.input.step), o = Number.isFinite(n) && n > 0 ? n : r / 100, c = Number.isFinite(this.input.valueAsNumber) ? this.input.valueAsNumber : i, a = b(c + t * o * e, i, s);
    this.input.value = String(Number(a.toFixed(10))), this.updateFromInput(), A(this, "input");
  }
  // Keyboard stepping: arrows follow reading direction, Shift ×10, Home / End jump
  onKey(t) {
    let e = yt(t.key, I(this));
    if (e === 0 && t.key === "ArrowUp" && (e = 1), e === 0 && t.key === "ArrowDown" && (e = -1), e !== 0) {
      t.preventDefault(), this.setFromStep(e, t.shiftKey ? 10 : 1), A(this, "change");
      return;
    }
    (t.key === "Home" || t.key === "End") && (t.preventDefault(), this.input.value = t.key === "Home" ? this.input.min : this.input.max, this.updateFromInput(), A(this, "input"), A(this, "change"));
  }
  // Begin a drag on the track: capture the pointer and jump to the press point
  onDown(t) {
    if (!this.hasAttribute("disabled")) {
      this.dragging = !0, this.pointerId = t.pointerId;
      try {
        this.track.setPointerCapture(t.pointerId);
      } catch {
      }
      this.setFromClientX(t.clientX), !this.reducedMotion && this.thumbBody && this.thumbBody.centerPop(1), T();
    }
  }
  // Follow the captured pointer while a drag is active
  onMove(t) {
    !this.dragging || this.pointerId !== t.pointerId || this.setFromClientX(t.clientX);
  }
  // End the drag: release capture, let the thumb settle, commit the change
  onUp(t) {
    if (this.pointerId === t.pointerId) {
      this.dragging = !1, this.pointerId = null;
      try {
        this.track.releasePointerCapture(t.pointerId);
      } catch {
      }
      this.thumbBody?.release(), A(this, "change"), this.requestFrame();
    }
  }
  // One animation step: advance the travel spring, repaint track, fill and thumb
  frame(t) {
    const e = this.thumbBody;
    if (!e)
      return !1;
    this.reducedMotion ? (this.thumbX = this.thumbTarget, this.thumbXVelocity = 0) : [this.thumbX, this.thumbXVelocity] = z(this.thumbX, this.thumbXVelocity, this.thumbTarget, 310, 22, t);
    const i = Math.abs(this.thumbXVelocity);
    i > 6 && (e.lean = Math.sign(this.thumbXVelocity));
    const s = this.reducedMotion ? 0 : Math.min(1, i / 550);
    e.leanAmount = this.reducedMotion ? 0 : Math.min(e.height * 0.12, i * 45e-4);
    const n = ((this.dragging && !this.reducedMotion ? 1.12 : 1) - this.pressScale) * 420 - this.pressScaleVelocity * 28;
    this.pressScaleVelocity += n * t, this.pressScale += this.pressScaleVelocity * t;
    const o = (1 + s * 0.32) * this.pressScale, c = 1 / Math.sqrt(1 + s * 0.32) * this.pressScale;
    e.update(t);
    const a = this.ctx, h = this.cssW / 2, d = this.cssH / 2, p = this.trackW, g = this.trackH || this.sizeConfig.track, C = this.resolveColor(`var(--jelly-track, ${u["background-neutral"]})`), k = this.resolveColor(`var(--jelly-accent, ${u["background-accent"]})`);
    return this.clearCanvas(), a.save(), a.beginPath(), a.roundRect(h - p / 2, d - g / 2, p, g, g / 2), a.fillStyle = C, a.fill(), a.clip(), a.fillStyle = k, I(this) ? a.fillRect(h + this.thumbX, d - g / 2, p / 2 - this.thumbX, g) : a.fillRect(h - p / 2, d - g / 2, this.thumbX + p / 2, g), a.restore(), this.paintBody(e, {
      fill: k,
      cx: this.thumbX,
      scaleX: o,
      scaleY: c,
      ring: this.focusRing()
    }), !(e.isResting() && Math.abs(this.thumbTarget - this.thumbX) < 0.2 && Math.abs(this.thumbXVelocity) < 0.5 && Math.abs(this.pressScale - 1) < 1e-3 && Math.abs(this.pressScaleVelocity) < 1e-3) || this.dragging;
  }
  // Lifecycle method: Fires when observed HTML attributes change dynamically
  attributeChangedCallback(t) {
    t === "size" && M(this), this.input && this.sync(t, this.getAttribute(t));
  }
  // Push one observed attribute into the hidden native input, then re-sync
  sync(t, e) {
    switch (t) {
      case "value":
        this.input.value = e ?? "50";
        break;
      case "min":
        this.input.min = e ?? "0";
        break;
      case "max":
        this.input.max = e ?? "100";
        break;
      case "step":
        this.input.step = e ?? "1";
        break;
      case "label":
        this.syncLabel();
        break;
      case "disabled":
        this.input.disabled = this.hasAttribute("disabled");
        break;
      case "size":
        this.applyShape();
        break;
    }
    this.updateFromInput();
  }
  // The current value (read live from the inner control once built)
  get value() {
    return this.input ? this.input.value : this.getAttribute("value") || "50";
  }
  // Set the value and reflect it into the thumb, ARIA and the form
  set value(t) {
    this.input && (this.input.value = t, this.updateFromInput());
  }
  // Route programmatic host focus into the hidden native input
  focus(t) {
    this.input?.focus(t);
  }
}
customElements.define("jelly-slider", ke);
export {
  Ce as isDarkMode,
  Nt as jellyToast,
  je as setThemeMode
};
