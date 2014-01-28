/*
 Highcharts JS v2.2.1 (2012-03-15)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
 */
(function () {
  function L(a, b) {
    var c;
    a || (a = {});
    for (c in b)a[c] = b[c];
    return a
  }

  function za() {
    for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++)d[b[a++]] = b[a];
    return d
  }

  function S(a, b) {
    return parseInt(a, b || 10)
  }

  function Ab(a) {
    return typeof a === "string"
  }

  function mb(a) {
    return typeof a === "object"
  }

  function Fb(a) {
    return Object.prototype.toString.call(a) === "[object Array]"
  }

  function Bb(a) {
    return typeof a === "number"
  }

  function nb(a) {
    return oa.log(a) / oa.LN10
  }

  function cb(a) {
    return oa.pow(10, a)
  }

  function Gb(a, b) {
    for (var c =
      a.length; c--;)if (a[c] === b) {
      a.splice(c, 1);
      break
    }
  }

  function s(a) {
    return a !== X && a !== null
  }

  function A(a, b, c) {
    var d, e;
    if (Ab(b))s(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (s(b) && mb(b))for (d in b)a.setAttribute(d, b[d]);
    return e
  }

  function Hb(a) {
    return Fb(a) ? a : [a]
  }

  function p() {
    var a = arguments, b, c, d = a.length;
    for (b = 0; b < d; b++)if (c = a[b], typeof c !== "undefined" && c !== null)return c
  }

  function P(a, b) {
    if (Qb && b && b.opacity !== X)b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
    L(a.style, b)
  }

  function Aa(a, b, c, d, e) {
    a = x.createElement(a);
    b && L(a, b);
    e && P(a, {padding: 0, border: Ma, margin: 0});
    c && P(a, c);
    d && d.appendChild(a);
    return a
  }

  function pa(a, b) {
    var c = function () {
    };
    c.prototype = new a;
    L(c.prototype, b);
    return c
  }

  function dc(a, b, c, d) {
    var e = Ea.lang, f = isNaN(b = Ba(b)) ? 2 : b, b = c === void 0 ? e.decimalPoint : c, d = d === void 0 ? e.thousandsSep : d, e = a < 0 ? "-" : "", c = String(S(a = Ba(+a || 0).toFixed(f))), g = c.length > 3 ? c.length % 3 : 0;
    return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + Ba(a - c).toFixed(f).slice(2) : "")
  }

  function Na(a, b) {
    return Array((b || 2) + 1 - String(a).length).join(0) + a
  }

  function ec(a, b, c, d) {
    var e, c = p(c, 1);
    e = a / c;
    b || (b = [1, 2, 2.5, 5, 10], d && d.allowDecimals === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
    for (d = 0; d < b.length; d++)if (a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2)break;
    a *= c;
    return a
  }

  function Kc(a, b) {
    var c = b || [
      [Rb, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
      [ob, [1, 2, 5, 10, 15, 30]],
      [pb, [1, 2, 5, 10, 15, 30]],
      [va, [1, 2, 3, 4, 6, 8, 12]],
      [Ca, [1, 2]],
      [Ya, [1, 2]],
      [Da, [1, 2, 3, 4, 6]],
      [Za, null]
    ], d = c[c.length - 1], e = E[d[0]], f = d[1], g;
    for (g = 0; g < c.length; g++)if (d =
      c[g], e = E[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + E[c[g + 1][0]]) / 2)break;
    e === E[Za] && a < 5 * e && (f = [1, 2, 5]);
    e === E[Za] && a < 5 * e && (f = [1, 2, 5]);
    c = ec(a / e, f);
    return{unitRange: e, count: c, unitName: d[0]}
  }

  function Lc(a, b, c, d) {
    var e = [], f = {}, g = Ea.global.useUTC, h, i = new Date(b), b = a.unitRange, k = a.count;
    b >= E[ob] && (i.setMilliseconds(0), i.setSeconds(b >= E[pb] ? 0 : k * Ta(i.getSeconds() / k)));
    if (b >= E[pb])i[pc](b >= E[va] ? 0 : k * Ta(i[fc]() / k));
    if (b >= E[va])i[qc](b >= E[Ca] ? 0 : k * Ta(i[gc]() / k));
    if (b >= E[Ca])i[hc](b >= E[Da] ? 1 : k * Ta(i[db]() / k));
    b >=
      E[Da] && (i[rc](b >= E[Za] ? 0 : k * Ta(i[qb]() / k)), h = i[rb]());
    b >= E[Za] && (h -= h % k, i[sc](h));
    if (b === E[Ya])i[hc](i[db]() - i[ic]() + p(d, 1));
    d = 1;
    h = i[rb]();
    for (var j = i.getTime(), l = i[qb](), i = i[db](); j < c;)e.push(j), b === E[Za] ? j = sb(h + d * k, 0) : b === E[Da] ? j = sb(h, l + d * k) : !g && (b === E[Ca] || b === E[Ya]) ? j = sb(h, l, i + d * k * (b === E[Ca] ? 1 : 7)) : (j += b * k, b <= E[va] && j % E[Ca] === 0 && (f[j] = Ca)), d++;
    e.push(j);
    e.info = L(a, {higherRanks: f, totalRange: b * k});
    return e
  }

  function tc() {
    this.symbol = this.color = 0
  }

  function uc(a, b, c, d, e, f, g, h, i) {
    var k = g.x, g = g.y, i = k + c +
      (i ? h : -a - h), j = g - b + d + 15, l;
    i < 7 && (i = c + k + h);
    i + a > c + e && (i -= i + a - (c + e), j = g - b + d - h, l = !0);
    j < d + 5 ? (j = d + 5, l && g >= j && g <= j + b && (j = g + d + h)) : j + b > d + f && (j = d + f - b - h);
    return{x: i, y: j}
  }

  function Mc(a, b) {
    var c = a.length, d, e;
    for (e = 0; e < c; e++)a[e].ss_i = e;
    a.sort(function (a, c) {
      d = b(a, c);
      return d === 0 ? a.ss_i - c.ss_i : d
    });
    for (e = 0; e < c; e++)delete a[e].ss_i
  }

  function Sb(a) {
    for (var b = a.length, c = a[0]; b--;)a[b] < c && (c = a[b]);
    return c
  }

  function Ib(a) {
    for (var b = a.length, c = a[0]; b--;)a[b] > c && (c = a[b]);
    return c
  }

  function Jb(a) {
    for (var b in a)a[b] && a[b].destroy &&
      a[b].destroy(), delete a[b]
  }

  function Tb(a) {
    tb || (tb = Aa(Ra));
    a && tb.appendChild(a);
    tb.innerHTML = ""
  }

  function jc(a, b) {
    var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
    if (b)throw c; else ca.console && console.log(c)
  }

  function Cb(a) {
    return parseFloat(a.toPrecision(14))
  }

  function Kb(a, b) {
    Ub = p(a, b.animation)
  }

  function vc() {
    var a = Ea.global.useUTC, b = a ? "getUTC" : "get", c = a ? "setUTC" : "set";
    sb = a ? Date.UTC : function (a, b, c, g, h, i) {
      return(new Date(a, b, p(c, 1), p(g, 0), p(h, 0), p(i, 0))).getTime()
    };
    fc = b + "Minutes";
    gc = b + "Hours";
    ic = b + "Day";
    db = b + "Date";
    qb = b + "Month";
    rb = b + "FullYear";
    pc = c + "Minutes";
    qc = c + "Hours";
    hc = c + "Date";
    rc = c + "Month";
    sc = c + "FullYear"
  }

  function Sa() {
  }

  function wc(a, b) {
    function c(a) {
      function b(a, c) {
        this.pos = a;
        this.type = c || "";
        this.isNew = !0;
        c || this.addLabel()
      }

      function c(a) {
        if (a)this.options = a, this.id = a.id;
        return this
      }

      function d(a, b, c, e) {
        this.isNegative = b;
        this.options = a;
        this.x = c;
        this.stack = e;
        this.alignOptions = {align: a.align || (U ? b ? "left" : "right" : "center"), verticalAlign: a.verticalAlign || (U ? "middle" : b ? "bottom" : "top"),
          y: p(a.y, U ? 4 : b ? 14 : -6), x: p(a.x, U ? b ? -6 : 6 : 0)};
        this.textAlign = a.textAlign || (U ? b ? "right" : "left" : "center")
      }

      function e() {
        var a = [], b = [], c;
        C = M = null;
        o(B.series, function (e) {
          if (e.visible || !q.ignoreHiddenSeries) {
            var f = e.options, g, h, i, j, k, m, l, n, Y, ea = f.threshold, B, o = [], xc = 0;
            if (R && ea <= 0)ea = f.threshold = null;
            if (t)f = e.xData, f.length && (C = Ua(p(C, f[0]), Sb(f)), M = W(p(M, f[0]), Ib(f))); else {
              var y, r, G, v = e.cropped, Z = e.xAxis.getExtremes(), V = !!e.modifyValue;
              g = f.stacking;
              Ha = g === "percent";
              if (g)k = f.stack, j = e.type + p(k, ""), m = "-" + j, e.stackKey =
                j, h = a[j] || [], a[j] = h, i = b[m] || [], b[m] = i;
              Ha && (C = 0, M = 99);
              f = e.processedXData;
              l = e.processedYData;
              B = l.length;
              for (c = 0; c < B; c++)if (n = f[c], Y = l[c], Y !== null && Y !== X && (g ? (r = (y = Y < ea) ? i : h, G = y ? m : j, Y = r[n] = s(r[n]) ? r[n] + Y : Y, qa[G] || (qa[G] = {}), qa[G][n] || (qa[G][n] = new d(u.stackLabels, y, n, k)), qa[G][n].setTotal(Y)) : V && (Y = e.modifyValue(Y)), v || (f[c + 1] || n) >= Z.min && (f[c - 1] || n) <= Z.max))if (n = Y.length)for (; n--;)Y[n] !== null && (o[xc++] = Y[n]); else o[xc++] = Y;
              !Ha && o.length && (C = Ua(p(C, o[0]), Sb(o)), M = W(p(M, o[0]), Ib(o)));
              s(ea) && (C >= ea ? (C =
                ea, Ma = !0) : M < ea && (M = ea, Na = !0))
            }
          }
        })
      }

      function f(a, b, c) {
        for (var d, b = Cb(Ta(b / a) * a), c = Cb(Yb(c / a) * a), e = []; b <= c;) {
          e.push(b);
          b = Cb(b + a);
          if (b === d)break;
          d = b
        }
        return e
      }

      function g(a, b, c, d) {
        var e = [];
        if (!d)B._minorAutoInterval = null;
        if (a >= 0.5)a = z(a), e = f(a, b, c); else if (a >= 0.08) {
          var h = Ta(b), i, j, k, n, m, l;
          for (i = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; h < c + 1 && !l; h++) {
            k = i.length;
            for (j = 0; j < k && !l; j++)n = nb(cb(h) * i[j]), n > b && e.push(m), m > c && (l = !0), m = n
          }
        } else if (b = cb(b), c = cb(c), a = u[d ? "minorTickInterval" : "tickInterval"],
          a = p(a === "auto" ? null : a, B._minorAutoInterval, (c - b) * (u.tickPixelInterval / (d ? 5 : 1)) / ((d ? D / N.length : D) || 1)), a = ec(a, null, oa.pow(10, Ta(oa.log(a) / oa.LN10))), e = Vb(f(a, b, c), nb), !d)B._minorAutoInterval = a / 5;
        d || (Oa = a);
        return e
      }

      function h() {
        var a = [], b, c;
        if (R) {
          c = N.length;
          for (b = 1; b < c; b++)a = a.concat(g(Ga, N[b - 1], N[b], !0))
        } else for (b = F + (N[0] - F) % Ga; b <= H; b += Ga)a.push(b);
        return a
      }

      function i() {
        var a, b = M - C >= fb, c, d, e, f, g, h;
        t && fb === X && !R && (s(u.min) || s(u.max) ? fb = null : (o(B.series, function (a) {
          f = a.xData;
          for (d = g = a.xIncrement ? 1 :
            f.length - 1; d > 0; d--)if (e = f[d] - f[d - 1], c === X || e < c)c = e
        }), fb = Ua(c * 5, M - C)));
        H - F < fb && (a = (fb - H + F) / 2, a = [F - a, p(u.min, F - a)], b && (a[2] = C), F = Ib(a), h = [F + fb, p(u.max, F + fb)], b && (h[2] = M), H = Sb(h), H - F < fb && (a[0] = H - fb, a[1] = p(u.min, H - fb), F = Ib(a)))
      }

      function j(a) {
        var b, c = u.tickInterval, d = u.tickPixelInterval;
        da ? (na = m[t ? "xAxis" : "yAxis"][u.linkedTo], b = na.getExtremes(), F = p(b.min, b.dataMin), H = p(b.max, b.dataMax), u.type !== na.options.type && jc(11, 1)) : (F = p(ba, u.min, C), H = p(ca, u.max, M));
        R && (!a && Ua(F, C) <= 0 && jc(10, 1), F = nb(F), H = nb(H));
        ja &&
        (ba = F = W(F, H - ja), ca = H, a && (ja = null));
        i();
        if (!Va && !Ha && !da && s(F) && s(H)) {
          b = H - F || 1;
          if (!s(u.min) && !s(ba) && Ea && (C < 0 || !Ma))F -= b * Ea;
          if (!s(u.max) && !s(ca) && Ja && (M > 0 || !Na))H += b * Ja
        }
        Oa = F === H || F === void 0 || H === void 0 ? 1 : da && !c && d === na.options.tickPixelInterval ? na.tickInterval : p(c, Va ? 1 : (H - F) * d / (D || 1));
        t && !a && o(B.series, function (a) {
          a.processData(F !== ma || H !== za)
        });
        ib();
        B.beforeSetTickPositions && B.beforeSetTickPositions();
        B.postProcessTickInterval && (Oa = B.postProcessTickInterval(Oa));
        !V && !R && (Wa = oa.pow(10, Ta(oa.log(Oa) /
          oa.LN10)), s(u.tickInterval) || (Oa = ec(Oa, null, Wa, u)));
        B.tickInterval = Oa;
        Ga = u.minorTickInterval === "auto" && Oa ? Oa / 5 : u.minorTickInterval;
        (N = u.tickPositions || Xa && Xa.apply(B, [F, H])) || (N = V ? (B.getNonLinearTimeTicks || Lc)(Kc(Oa, u.units), F, H, u.startOfWeek, B.ordinalPositions, B.closestPointRange, !0) : R ? g(Oa, F, H) : f(Oa, F, H));
        if (!da && (a = N[0], c = N[N.length - 1], u.startOnTick ? F = a : F > a && N.shift(), u.endOnTick ? H = c : H < c && N.pop(), gb || (gb = {x: 0, y: 0}), !V && N.length > gb[w] && u.alignTicks !== !1))gb[w] = N.length
      }

      function k(a) {
        a = (new c(a)).render();
        ta.push(a);
        return a
      }

      function l() {
        var a = u.title, d = u.stackLabels, e = u.alternateGridColor, f = u.lineWidth, g, i, j = m.hasRendered && s(ma) && !isNaN(ma), n = (g = B.series.length && s(F) && s(H)) || p(u.showEmpty, !0), Y, q;
        if (g || da)if (Ga && !Va && o(h(), function (a) {
          va[a] || (va[a] = new b(a, "minor"));
          j && va[a].isNew && va[a].render(null, !0);
          va[a].isActive = !0;
          va[a].render()
        }), o(N.slice(1).concat([N[0]]), function (a, c) {
          c = c === N.length - 1 ? 0 : c + 1;
          if (!da || a >= F && a <= H)Pa[a] || (Pa[a] = new b(a)), j && Pa[a].isNew && Pa[a].render(c, !0), Pa[a].isActive = !0,
            Pa[a].render(c)
        }), e && o(N, function (a, b) {
          if (b % 2 === 0 && a < H)Da[a] || (Da[a] = new c), Y = a, q = N[b + 1] !== X ? N[b + 1] : H, Da[a].options = {from: R ? cb(Y) : Y, to: R ? cb(q) : q, color: e}, Da[a].render(), Da[a].isActive = !0
        }), !B._addedPlotLB)o((u.plotLines || []).concat(u.plotBands || []), function (a) {
          k(a)
        }), B._addedPlotLB = !0;
        o([Pa, va, Da], function (a) {
          for (var b in a)a[b].isActive ? a[b].isActive = !1 : (a[b].destroy(), delete a[b])
        });
        f && (g = x + (y ? A : 0) + T, i = ra - Lb - (y ? hb : 0) + T, g = I.crispLine([wa, G ? x : g, G ? i : E, fa, G ? sa - Zb : g, G ? i : ra - Lb], f), $ ? $.animate({d: g}) :
          $ = I.path(g).attr({stroke: u.lineColor, "stroke-width": f, zIndex: 7}).add(), $[n ? "show" : "hide"]());
        if (v && n)n = G ? x : E, f = S(a.style.fontSize || 12), n = {low: n + (G ? 0 : D), middle: n + D / 2, high: n + (G ? D : 0)}[a.align], f = (G ? E + hb : x) + (G ? 1 : -1) * (y ? -1 : 1) * Ya + (r === 2 ? f : 0), v[v.isNew ? "attr" : "animate"]({x: G ? n : f + (y ? A : 0) + T + (a.x || 0), y: G ? f - (y ? hb : 0) + T : n + (a.y || 0)}), v.isNew = !1;
        if (d && d.enabled) {
          var t, yc, d = B.stackTotalGroup;
          if (!d)B.stackTotalGroup = d = I.g("stack-labels").attr({visibility: eb, zIndex: 6}).translate(O, J).add();
          for (t in qa)for (yc in a =
            qa[t], a)a[yc].render(d)
        }
        B.isDirty = !1
      }

      function n(a) {
        for (var b = ta.length; b--;)ta[b].id === a && ta[b].destroy()
      }

      var t = a.isX, y = a.opposite, G = U ? !t : t, r = G ? y ? 0 : 2 : y ? 1 : 3, qa = {}, u = K(t ? $b : kc, [Nc, Oc, zc, Pc][r], a), B = this, v, Z = u.type, V = Z === "datetime", R = Z === "logarithmic", T = u.offset || 0, w = t ? "x" : "y", D = 0, ua, ia, bb, jb, x, E, A, hb, Lb, Zb, Mb, ib, P, Q, bc, $, C, M, fb = u.minRange || u.maxZoom, ja = u.range, ba, ca, Aa, Ca, H = null, F = null, ma, za, Ea = u.minPadding, Ja = u.maxPadding, Ka = 0, da = s(u.linkedTo), na, Ma, Na, Ha, Z = u.events, Sa, ta = [], Oa, Ga, Wa, N, Xa = u.tickPositioner,
        Pa = {}, va = {}, Da = {}, Fa, La, Ya, Va = u.categories, db = u.labels.formatter || function () {
          var a = this.value, b = this.dateTimeLabelFormat;
          return b ? ac(b, a) : Oa % 1E6 === 0 ? a / 1E6 + "M" : Oa % 1E3 === 0 ? a / 1E3 + "k" : !Va && a >= 1E3 ? dc(a, 0) : a
        }, Ra = G && u.labels.staggerLines, ya = u.reversed, Ia = Va && u.tickmarkPlacement === "between" ? 0.5 : 0;
      b.prototype = {addLabel: function () {
        var a = this.pos, b = u.labels, c = Va && G && Va.length && !b.step && !b.staggerLines && !b.rotation && ka / Va.length || !G && ka / 2, d = a === N[0], e = a === N[N.length - 1], f = Va && s(Va[a]) ? Va[a] : a, g = this.label, h = N.info,
          i;
        V && h && (i = u.dateTimeLabelFormats[h.higherRanks[a] || h.unitName]);
        this.isFirst = d;
        this.isLast = e;
        a = db.call({axis: B, chart: m, isFirst: d, isLast: e, dateTimeLabelFormat: i, value: R ? Cb(cb(f)) : f});
        c = c && {width: W(1, z(c - 2 * (b.padding || 10))) + ga};
        c = L(c, b.style);
        s(g) ? g && g.attr({text: a}).css(c) : this.label = s(a) && b.enabled ? I.text(a, 0, 0, b.useHTML).attr({align: b.align, rotation: b.rotation}).css(c).add(Q) : null
      }, getLabelSize: function () {
        var a = this.label;
        return a ? (this.labelBBox = a.getBBox())[G ? "height" : "width"] : 0
      }, getLabelSides: function () {
        var a =
          u.labels, b = this.labelBBox.width, a = b * {left: 0, center: 0.5, right: 1}[a.align] - a.x;
        return[-a, b - a]
      }, handleOverflow: function (a) {
        var b = !0, c = this.isFirst, d = this.isLast, e = this.label, f = e.x;
        if (c || d) {
          var g = this.getLabelSides(), h = g[0], g = g[1], i = m.plotLeft, j = i + B.len, k = (a = Pa[N[a + (c ? 1 : -1)]]) && a.label.x + a.getLabelSides()[c ? 0 : 1];
          c && !ya || d && ya ? f + h < i && (f = i - h, a && f + g > k && (b = !1)) : f + g > j && (f = j - g, a && f + h < k && (b = !1));
          e.x = f
        }
        return b
      }, render: function (a, b) {
        var c = this.type, d = this.label, e = this.pos, f = u.labels, g = this.gridLine, h = c ? c + "Grid" :
          "grid", i = c ? c + "Tick" : "tick", j = u[h + "LineWidth"], k = u[h + "LineColor"], n = u[h + "LineDashStyle"], m = u[i + "Length"], h = u[i + "Width"] || 0, l = u[i + "Color"], Y = u[i + "Position"], i = this.mark, q = f.step, ea = b && Za || ra, qa = !0, o;
        o = G ? Mb(e + Ia, null, null, b) + bb : x + T + (y ? (b && $a || sa) - Zb - x : 0);
        ea = G ? ea - Lb + T - (y ? hb : 0) : ea - Mb(e + Ia, null, null, b) - bb;
        if (j) {
          e = P(e + Ia, j, b);
          if (g === X) {
            g = {stroke: k, "stroke-width": j};
            if (n)g.dashstyle = n;
            if (!c)g.zIndex = 1;
            this.gridLine = g = j ? I.path(e).attr(g).add(bc) : null
          }
          !b && g && e && g.animate({d: e})
        }
        if (h)Y === "inside" && (m = -m), y &&
          (m = -m), c = I.crispLine([wa, o, ea, fa, o + (G ? 0 : -m), ea + (G ? m : 0)], h), i ? i.animate({d: c}) : this.mark = I.path(c).attr({stroke: l, "stroke-width": h}).add(Q);
        if (d && !isNaN(o))o = o + f.x - (Ia && G ? Ia * ia * (ya ? -1 : 1) : 0), ea = ea + f.y - (Ia && !G ? Ia * ia * (ya ? 1 : -1) : 0), s(f.y) || (ea += S(d.styles.lineHeight) * 0.9 - d.getBBox().height / 2), Ra && (ea += a / (q || 1) % Ra * 16), d.x = o, d.y = ea, this.isFirst && !p(u.showFirstLabel, 1) || this.isLast && !p(u.showLastLabel, 1) ? qa = !1 : !Ra && G && f.overflow === "justify" && !this.handleOverflow(a) && (qa = !1), q && a % q && (qa = !1), qa ? (d[this.isNew ?
          "attr" : "animate"]({x: d.x, y: d.y}), d.show(), this.isNew = !1) : d.hide()
      }, destroy: function () {
        Jb(this)
      }};
      c.prototype = {render: function () {
        var a = this, b = (B.pointRange || 0) / 2, c = a.options, d = c.label, e = a.label, f = c.width, g = c.to, h = c.from, i = c.value, j, k = c.dashStyle, n = a.svgElem, m = [], l, Y, u = c.color;
        Y = c.zIndex;
        var ea = c.events;
        R && (h = nb(h), g = nb(g), i = nb(i));
        if (f) {
          if (m = P(i, f), b = {stroke: u, "stroke-width": f}, k)b.dashstyle = k
        } else if (s(h) && s(g))h = W(h, F - b), g = Ua(g, H + b), j = P(g), (m = P(h)) && j ? m.push(j[4], j[5], j[1], j[2]) : m = null, b = {fill: u};
        else return;
        if (s(Y))b.zIndex = Y;
        if (n)m ? n.animate({d: m}, null, n.onGetPath) : (n.hide(), n.onGetPath = function () {
          n.show()
        }); else if (m && m.length && (a.svgElem = n = I.path(m).attr(b).add(), ea))for (l in k = function (b) {
          n.on(b, function (c) {
            ea[b].apply(a, [c])
          })
        }, ea)k(l);
        if (d && s(d.text) && m && m.length && A > 0 && hb > 0) {
          d = K({align: G && j && "center", x: G ? !j && 4 : 10, verticalAlign: !G && j && "middle", y: G ? j ? 16 : 10 : j ? 6 : -4, rotation: G && !j && 90}, d);
          if (!e)a.label = e = I.text(d.text, 0, 0).attr({align: d.textAlign || d.align, rotation: d.rotation, zIndex: Y}).css(d.style).add();
          j = [m[1], m[4], p(m[6], m[1])];
          m = [m[2], m[5], p(m[7], m[2])];
          l = Sb(j);
          Y = Sb(m);
          e.align(d, !1, {x: l, y: Y, width: Ib(j) - l, height: Ib(m) - Y});
          e.show()
        } else e && e.hide();
        return a
      }, destroy: function () {
        Jb(this);
        Gb(ta, this)
      }};
      d.prototype = {destroy: function () {
        Jb(this)
      }, setTotal: function (a) {
        this.cum = this.total = a
      }, render: function (a) {
        var b = this.options.formatter.call(this);
        this.label ? this.label.attr({text: b, visibility: ab}) : this.label = m.renderer.text(b, 0, 0).css(this.options.style).attr({align: this.textAlign, rotation: this.options.rotation,
          visibility: ab}).add(a)
      }, setOffset: function (a, b) {
        var c = this.isNegative, d = B.translate(this.total, 0, 0, 0, 1), e = B.translate(0), e = Ba(d - e), f = m.xAxis[0].translate(this.x) + a, g = m.plotHeight, c = {x: U ? c ? d : d - e : f, y: U ? g - f - b : c ? g - d - e : g - d, width: U ? e : b, height: U ? b : e};
        this.label && this.label.align(this.alignOptions, null, c).attr({visibility: eb})
      }};
      Mb = function (a, b, c, d, e) {
        var f = 1, g = 0, h = d ? jb : ia, d = d ? ma : F, e = u.ordinal || R && e;
        h || (h = ia);
        c && (f *= -1, g = D);
        ya && (f *= -1, g -= f * D);
        b ? (ya && (a = D - a), a = a / h + d, e && (a = B.lin2val(a))) : (e && (a = B.val2lin(a)),
          a = f * (a - d) * h + g + f * Ka);
        return a
      };
      P = function (a, b, c) {
        var d, e, f, a = Mb(a, null, null, c), g = c && Za || ra, h = c && $a || sa, i, c = e = z(a + bb);
        d = f = z(g - a - bb);
        if (isNaN(a))i = !0; else if (G) {
          if (d = E, f = g - Lb, c < x || c > x + A)i = !0
        } else if (c = x, e = h - Zb, d < E || d > E + hb)i = !0;
        return i ? null : I.crispLine([wa, c, d, fa, e, f], b || 0)
      };
      ib = function () {
        var a = H - F, b = 0, c, d;
        if (t)da ? b = na.pointRange : o(B.series, function (a) {
          b = W(b, a.pointRange);
          d = a.closestPointRange;
          !a.noSharedTooltip && s(d) && (c = s(c) ? Ua(c, d) : d)
        }), B.pointRange = b, B.closestPointRange = c;
        jb = ia;
        B.translationSlope =
          ia = D / (a + b || 1);
        bb = G ? x : Lb;
        Ka = ia * (b / 2)
      };
      xa.push(B);
      m[t ? "xAxis" : "yAxis"].push(B);
      U && t && ya === X && (ya = !0);
      L(B, {addPlotBand: k, addPlotLine: k, adjustTickAmount: function () {
        if (gb && gb[w] && !V && !Va && !da && u.alignTicks !== !1) {
          var a = Fa, b = N.length;
          Fa = gb[w];
          if (b < Fa) {
            for (; N.length < Fa;)N.push(Cb(N[N.length - 1] + Oa));
            ia *= (b - 1) / (Fa - 1);
            H = N[N.length - 1]
          }
          if (s(a) && Fa !== a)B.isDirty = !0
        }
      }, categories: Va, getExtremes: function () {
        return{min: R ? Cb(cb(F)) : F, max: R ? Cb(cb(H)) : H, dataMin: C, dataMax: M, userMin: ba, userMax: ca}
      }, getPlotLinePath: P, getThreshold: function (a) {
        var b =
          R ? cb(F) : F, c = R ? cb(H) : H;
        b > a || a === null ? a = b : c < a && (a = c);
        return Mb(a, 0, 1, 0, 1)
      }, isXAxis: t, options: u, plotLinesAndBands: ta, getOffset: function () {
        var a = B.series.length && s(F) && s(H), c = a || p(u.showEmpty, !0), d = 0, e, f = 0, g = u.title, h = u.labels, i = [-1, 1, 1, -1][r], j;
        Q || (Q = I.g("axis").attr({zIndex: 7}).add(), bc = I.g("grid").attr({zIndex: u.gridZIndex || 1}).add());
        La = 0;
        if (a || da)o(N, function (a) {
          Pa[a] ? Pa[a].addLabel() : Pa[a] = new b(a)
        }), o(N, function (a) {
          if (r === 0 || r === 2 || {1: "left", 3: "right"}[r] === h.align)La = W(Pa[a].getLabelSize(), La)
        }),
          Ra && (La += (Ra - 1) * 16); else for (j in Pa)Pa[j].destroy(), delete Pa[j];
        if (g && g.text) {
          if (!v)v = B.axisTitle = I.text(g.text, 0, 0, g.useHTML).attr({zIndex: 7, rotation: g.rotation || 0, align: g.textAlign || {low: "left", middle: "center", high: "right"}[g.align]}).css(g.style).add(), v.isNew = !0;
          if (c)d = v.getBBox()[G ? "height" : "width"], f = p(g.margin, G ? 5 : 10), e = g.offset;
          v[c ? "show" : "hide"]()
        }
        T = i * p(u.offset, pa[r]);
        Ya = p(e, La + f + (r !== 2 && La && i * u.labels[G ? "y" : "x"]));
        pa[r] = W(pa[r], Ya + d + i * T)
      }, render: l, setAxisSize: function () {
        var a = u.offsetLeft ||
          0, b = u.offsetRight || 0;
        x = p(u.left, O + a);
        E = p(u.top, J);
        A = p(u.width, ka - a + b);
        hb = p(u.height, la);
        Lb = ra - hb - E;
        Zb = sa - A - x;
        D = G ? A : hb;
        B.left = x;
        B.top = E;
        B.len = D
      }, setAxisTranslation: ib, setCategories: function (b, c) {
        B.categories = a.categories = Va = b;
        o(B.series, function (a) {
          a.translate();
          a.setTooltipPoints(!0)
        });
        B.isDirty = !0;
        p(c, !0) && m.redraw()
      }, setExtremes: function (a, b, c, d, e) {
        c = p(c, !0);
        e = L(e, {min: a, max: b});
        aa(B, "setExtremes", e, function () {
          ba = a;
          ca = b;
          B.isDirtyExtremes = !0;
          c && m.redraw(d)
        })
      }, setScale: function () {
        var a, b, c, d;
        ma = F;
        za = H;
        ua = D;
        D = G ? A : hb;
        d = D !== ua;
        o(B.series, function (a) {
          if (a.isDirtyData || a.isDirty || a.xAxis.isDirty)c = !0
        });
        if (d || c || da || ba !== Aa || ca !== Ca) {
          e();
          j();
          Aa = ba;
          Ca = ca;
          if (!t)for (a in qa)for (b in qa[a])qa[a][b].cum = qa[a][b].total;
          if (!B.isDirty)B.isDirty = d || F !== ma || H !== za
        }
      }, setTickPositions: j, translate: Mb, redraw: function () {
        ub.resetTracker && ub.resetTracker();
        l();
        o(ta, function (a) {
          a.render()
        });
        o(B.series, function (a) {
          a.isDirty = !0
        })
      }, removePlotBand: n, removePlotLine: n, reversed: ya, setTitle: function (a, b) {
        u.title = K(u.title,
          a);
        v = v.destroy();
        B.isDirty = !0;
        p(b, !0) && m.redraw()
      }, series: [], stacks: qa, destroy: function () {
        var a;
        Qa(B);
        for (a in qa)Jb(qa[a]), qa[a] = null;
        if (B.stackTotalGroup)B.stackTotalGroup = B.stackTotalGroup.destroy();
        o([Pa, va, Da, ta], function (a) {
          Jb(a)
        });
        o([$, Q, bc, v], function (a) {
          a && a.destroy()
        });
        $ = Q = bc = v = null
      }});
      for (Sa in Z)ha(B, Sa, Z[Sa]);
      if (R)B.val2lin = nb, B.lin2val = cb
    }

    function d(a) {
      function b() {
        var c = this.points || Hb(this), d = c[0].series, e;
        e = [d.tooltipHeaderFormatter(c[0].key)];
        o(c, function (a) {
          d = a.series;
          e.push(d.tooltipFormatter &&
            d.tooltipFormatter(a) || a.point.tooltipFormatter(d.tooltipOptions.pointFormat))
        });
        e.push(a.footerFormat || "");
        return e.join("")
      }

      function c(a, b) {
        l = n ? a : (2 * l + a) / 3;
        q = n ? b : (q + b) / 2;
        t.attr({x: l, y: q});
        lb = Ba(a - l) > 1 || Ba(b - q) > 1 ? function () {
          c(a, b)
        } : null
      }

      function d() {
        if (!n) {
          var a = m.hoverPoints;
          t.hide();
          a && o(a, function (a) {
            a.setState()
          });
          m.hoverPoints = null;
          n = !0
        }
      }

      var e, f = a.borderWidth, g = a.crosshairs, h = [], i = a.style, j = a.shared, k = S(i.padding), n = !0, l = 0, q = 0;
      i.padding = 0;
      var t = I.label("", 0, 0, null, null, null, a.useHTML).attr({padding: k,
        fill: a.backgroundColor, "stroke-width": f, r: a.borderRadius, zIndex: 8}).css(i).hide().add();
      Fa || t.shadow(a.shadow);
      return{shared: j, refresh: function (f) {
        var i, k, l, q, r = {}, y = [];
        l = f.tooltipPos;
        i = a.formatter || b;
        var r = m.hoverPoints, v;
        j && (!f.series || !f.series.noSharedTooltip) ? (q = 0, r && o(r, function (a) {
          a.setState()
        }), m.hoverPoints = f, o(f, function (a) {
          a.setState(ta);
          q += a.plotY;
          y.push(a.getLabelConfig())
        }), k = f[0].plotX, q = z(q) / f.length, r = {x: f[0].category}, r.points = y, f = f[0]) : r = f.getLabelConfig();
        r = i.call(r);
        e = f.series;
        k = p(k, f.plotX);
        q = p(q, f.plotY);
        i = z(l ? l[0] : U ? ka - q : k);
        k = z(l ? l[1] : U ? la - k : q);
        l = j || !e.isCartesian || e.tooltipOutsidePlot || Db(i, k);
        r === !1 || !l ? d() : (n && (t.show(), n = !1), t.attr({text: r}), v = a.borderColor || f.color || e.color || "#606060", t.attr({stroke: v}), l = uc(t.width, t.height, O, J, ka, la, {x: i, y: k}, p(a.distance, 12), U), c(z(l.x), z(l.y)));
        if (g) {
          g = Hb(g);
          var R;
          l = g.length;
          for (var Z; l--;)if (R = f.series[l ? "yAxis" : "xAxis"], g[l] && R)if (R = R.getPlotLinePath(l ? p(f.stackY, f.y) : f.x, 1), h[l])h[l].attr({d: R, visibility: eb}); else {
            Z = {"stroke-width": g[l].width ||
              1, stroke: g[l].color || "#C0C0C0", zIndex: g[l].zIndex || 2};
            if (g[l].dashStyle)Z.dashstyle = g[l].dashStyle;
            h[l] = I.path(R).attr(Z).add()
          }
        }
        aa(m, "tooltipRefresh", {text: r, x: i + O, y: k + J, borderColor: v})
      }, hide: d, hideCrosshairs: function () {
        o(h, function (a) {
          a && a.hide()
        })
      }, destroy: function () {
        o(h, function (a) {
          a && a.destroy()
        });
        t && (t = t.destroy())
      }}
    }

    function e(a) {
      function b(a) {
        var c, d, e, a = a || ca.event;
        if (!a.target)a.target = a.srcElement;
        if (a.originalEvent)a = a.originalEvent;
        if (a.event)a = a.event;
        c = a.touches ? a.touches.item(0) : a;
        ya = Ac(D);
        d = ya.left;
        e = ya.top;
        Qb ? (d = a.x, c = a.y) : (d = c.pageX - d, c = c.pageY - e);
        return L(a, {chartX: z(d), chartY: z(c)})
      }

      function c(a) {
        var b = {xAxis: [], yAxis: []};
        o(xa, function (c) {
          var d = c.translate, e = c.isXAxis;
          b[e ? "xAxis" : "yAxis"].push({axis: c, value: d((U ? !e : e) ? a.chartX - O : la - a.chartY + J, !0)})
        });
        return b
      }

      function e() {
        var a = m.hoverSeries, b = m.hoverPoint;
        if (b)b.onMouseOut();
        if (a)a.onMouseOut();
        vb && (vb.hide(), vb.hideCrosshairs());
        ob = null
      }

      function f() {
        if (n) {
          var a = {xAxis: [], yAxis: []}, b = n.getBBox(), c = b.x - O, d = b.y - J;
          k && (o(xa,
            function (e) {
              if (e.options.zoomEnabled !== !1) {
                var f = e.translate, g = e.isXAxis, h = U ? !g : g, i = f(h ? c : la - d - b.height, !0, 0, 0, 1), f = f(h ? c + b.width : la - d, !0, 0, 0, 1);
                a[g ? "xAxis" : "yAxis"].push({axis: e, min: Ua(i, f), max: W(i, f)})
              }
            }), aa(m, "selection", a, zb));
          n = n.destroy()
        }
        P(D, {cursor: "auto"});
        m.mouseIsDown = Da = k = !1;
        Qa(x, Ga ? "touchend" : "mouseup", f)
      }

      function g(a) {
        var b = s(a.pageX) ? a.pageX : a.page.x, a = s(a.pageX) ? a.pageY : a.page.y;
        ya && !Db(b - ya.left - O, a - ya.top - J) && e()
      }

      function h() {
        e();
        ya = null
      }

      var i, j, k, n, l = Fa ? "" : q.zoomType, t = /x/.test(l),
        r = /y/.test(l), y = t && !U || r && U, p = r && !U || t && U;
      if (!db)m.trackerGroup = db = I.g("tracker").attr({zIndex: 9}).add();
      if (a.enabled)m.tooltip = vb = d(a), Bb = setInterval(function () {
        lb && lb()
      }, 32);
      (function () {
        D.onmousedown = function (a) {
          a = b(a);
          !Ga && a.preventDefault && a.preventDefault();
          m.mouseIsDown = Da = !0;
          m.mouseDownX = i = a.chartX;
          j = a.chartY;
          ha(x, Ga ? "touchend" : "mouseup", f)
        };
        var d = function (c) {
          if (!c || !(c.touches && c.touches.length > 1)) {
            c = b(c);
            if (!Ga)c.returnValue = !1;
            var d = c.chartX, e = c.chartY, f = !Db(d - O, e - J);
            Ga && c.type === "touchstart" &&
            (A(c.target, "isTracker") ? m.runTrackerClick || c.preventDefault() : !kb && !f && c.preventDefault());
            f && (d < O ? d = O : d > O + ka && (d = O + ka), e < J ? e = J : e > J + la && (e = J + la));
            if (Da && c.type !== "touchstart") {
              if (k = Math.sqrt(Math.pow(i - d, 2) + Math.pow(j - e, 2)), k > 10) {
                var g = Db(i - O, j - J);
                if (Nb && (t || r) && g)n || (n = I.rect(O, J, y ? 1 : ka, p ? 1 : la, 0).attr({fill: q.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7}).add());
                n && y && (c = d - i, n.attr({width: Ba(c), x: (c > 0 ? 0 : c) + i}));
                n && p && (e -= j, n.attr({height: Ba(e), y: (e > 0 ? 0 : e) + j}));
                g && !n && q.panning && m.pan(d)
              }
            } else if (!f) {
              var h,
                d = m.hoverPoint, e = m.hoverSeries, l, o, g = sa, R = U ? c.chartY : c.chartX - O;
              if (vb && a.shared && (!e || !e.noSharedTooltip)) {
                h = [];
                l = Q.length;
                for (o = 0; o < l; o++)if (Q[o].visible && Q[o].options.enableMouseTracking !== !1 && !Q[o].noSharedTooltip && Q[o].tooltipPoints.length)c = Q[o].tooltipPoints[R], c._dist = Ba(R - c.plotX), g = Ua(g, c._dist), h.push(c);
                for (l = h.length; l--;)h[l]._dist > g && h.splice(l, 1);
                if (h.length && h[0].plotX !== ob)vb.refresh(h), ob = h[0].plotX
              }
              if (e && e.tracker && (c = e.tooltipPoints[R]) && c !== d)c.onMouseOver()
            }
            return f || !Nb
          }
        };
        D.onmousemove =
          d;
        ha(D, "mouseleave", h);
        ha(x, "mousemove", g);
        D.ontouchstart = function (a) {
          if (t || r)D.onmousedown(a);
          d(a)
        };
        D.ontouchmove = d;
        D.ontouchend = function () {
          k && e()
        };
        D.onclick = function (a) {
          var d = m.hoverPoint, a = b(a);
          a.cancelBubble = !0;
          if (!k)if (d && (A(a.target, "isTracker") || A(a.target.parentNode, "isTracker"))) {
            var e = d.plotX, f = d.plotY;
            L(d, {pageX: ya.left + O + (U ? ka - f : e), pageY: ya.top + J + (U ? la - e : f)});
            aa(d.series, "click", L(a, {point: d}));
            d.firePointEvent("click", a)
          } else L(a, c(a)), Db(a.chartX - O, a.chartY - J) && aa(m, "click", a);
          k = !1
        }
      })();
      L(this, {zoomX: t, zoomY: r, resetTracker: e, normalizeMouseEvent: b, destroy: function () {
        if (m.trackerGroup)m.trackerGroup = db = m.trackerGroup.destroy();
        Qa(D, "mouseleave", h);
        Qa(x, "mousemove", g);
        D.onclick = D.onmousedown = D.onmousemove = D.ontouchstart = D.ontouchend = D.ontouchmove = null
      }})
    }

    function f(a) {
      var b = a.type || q.type || q.defaultSeriesType, c = Ha[b], d = m.hasRendered;
      if (d)if (U && b === "column")c = Ha.bar; else if (!U && b === "bar")c = Ha.column;
      b = new c;
      b.init(m, a);
      !d && b.inverted && (U = !0);
      if (b.isCartesian)Nb = b.isCartesian;
      Q.push(b);
      return b
    }

    function g() {
      q.alignTicks !== !1 && o(xa, function (a) {
        a.adjustTickAmount()
      });
      gb = null
    }

    function h(a) {
      var b = m.isDirtyLegend, c, d = m.isDirtyBox, e = Q.length, f = e, h = m.clipRect;
      for (Kb(a, m); f--;)if (a = Q[f], a.isDirty && a.options.stacking) {
        c = !0;
        break
      }
      if (c)for (f = e; f--;)if (a = Q[f], a.options.stacking)a.isDirty = !0;
      o(Q, function (a) {
        a.isDirty && a.options.legendType === "point" && (b = !0)
      });
      if (b && Xa.renderLegend)Xa.renderLegend(), m.isDirtyLegend = !1;
      Nb && (La || (gb = null, o(xa, function (a) {
        a.setScale()
      })), g(), Wb(), o(xa, function (a) {
        if (a.isDirtyExtremes)a.isDirtyExtremes = !1, aa(a, "afterSetExtremes", a.getExtremes());
        if (a.isDirty || d)a.redraw(), d = !0
      }));
      d && (qb(), h && (Ob(h), h.animate({width: m.plotSizeX, height: m.plotSizeY + 1})));
      o(Q, function (a) {
        a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
      });
      ub && ub.resetTracker && ub.resetTracker();
      I.draw();
      aa(m, "redraw")
    }

    function i() {
      var a = v.xAxis || {}, b = v.yAxis || {}, a = Hb(a);
      o(a, function (a, b) {
        a.index = b;
        a.isX = !0
      });
      b = Hb(b);
      o(b, function (a, b) {
        a.index = b
      });
      a = a.concat(b);
      o(a, function (a) {
        new c(a)
      });
      g()
    }

    function k() {
      var a = Ea.lang, b = q.resetZoomButton,
        c = b.theme, d = c.states, e = b.relativeTo === "chart" ? null : {x: O, y: J, width: ka, height: la};
      m.resetZoomButton = I.button(a.resetZoom, null, null, Fb, c, d && d.hover).attr({align: b.position.align, title: a.resetZoomTitle}).add().align(b.position, !1, e)
    }

    function j(a, b) {
      $ = K(v.title, a);
      ja = K(v.subtitle, b);
      o([
        ["title", a, $],
        ["subtitle", b, ja]
      ], function (a) {
        var b = a[0], c = m[b], d = a[1], a = a[2];
        c && d && (c = c.destroy());
        a && a.text && !c && (m[b] = I.text(a.text, 0, 0, a.useHTML).attr({align: a.align, "class": Ia + b, zIndex: a.zIndex || 4}).css(a.style).add().align(a,
          !1, ib))
      })
    }

    function l() {
      Ja = q.renderTo;
      na = Ia + lc++;
      Ab(Ja) && (Ja = x.getElementById(Ja));
      Ja || jc(13, !0);
      Ja.innerHTML = "";
      Ja.offsetWidth || (C = Ja.cloneNode(0), P(C, {position: wb, top: "-9999px", display: ""}), x.body.appendChild(C));
      za = (C || Ja).offsetWidth;
      Ca = (C || Ja).offsetHeight;
      m.chartWidth = sa = q.width || za || 600;
      m.chartHeight = ra = q.height || (Ca > 19 ? Ca : 400);
      m.container = D = Aa(Ra, {className: Ia + "container" + (q.className ? " " + q.className : ""), id: na}, L({position: mc, overflow: ab, width: sa + ga, height: ra + ga, textAlign: "left", lineHeight: "normal"},
        q.style), C || Ja);
      m.renderer = I = q.forExport ? new Eb(D, sa, ra, !0) : new Xb(D, sa, ra);
      Fa && I.create(m, D, sa, ra);
      var a, b;
      Bc && D.getBoundingClientRect && (a = function () {
        P(D, {left: 0, top: 0});
        b = D.getBoundingClientRect();
        P(D, {left: -(b.left - S(b.left)) + ga, top: -(b.top - S(b.top)) + ga})
      }, a(), ha(ca, "resize", a), ha(m, "destroy", function () {
        Qa(ca, "resize", a)
      }))
    }

    function n() {
      function a(c) {
        var d = q.width || Ja.offsetWidth, e = q.height || Ja.offsetHeight, c = c ? c.target : ca;
        if (d && e && (c === ca || c === x)) {
          if (d !== za || e !== Ca)clearTimeout(b), b = setTimeout(function () {
            tb(d,
              e, !1)
          }, 100);
          za = d;
          Ca = e
        }
      }

      var b;
      ha(ca, "resize", a);
      ha(m, "destroy", function () {
        Qa(ca, "resize", a)
      })
    }

    function t() {
      m && aa(m, "endResize", null, function () {
        La -= 1
      })
    }

    function r() {
      for (var a = U || q.inverted || q.type === "bar" || q.defaultSeriesType === "bar", b = v.series, c = b && b.length; !a && c--;)b[c].type === "bar" && (a = !0);
      m.inverted = U = a
    }

    function Z() {
      var a = v.labels, b = v.credits, c;
      j();
      Xa = m.legend = new Rb;
      o(xa, function (a) {
        a.setScale()
      });
      Wb();
      o(xa, function (a) {
        a.setTickPositions(!0)
      });
      g();
      Wb();
      qb();
      Nb && o(xa, function (a) {
        a.render()
      });
      if (!m.seriesGroup)m.seriesGroup =
        I.g("series-group").attr({zIndex: 3}).add();
      o(Q, function (a) {
        a.translate();
        a.setTooltipPoints();
        a.render()
      });
      a.items && o(a.items, function () {
        var b = L(a.style, this.style), c = S(b.left) + O, d = S(b.top) + J + 12;
        delete b.left;
        delete b.top;
        I.text(this.html, c, d).attr({zIndex: 2}).css(b).add()
      });
      if (b.enabled && !m.credits)c = b.href, m.credits = I.text(b.text, 0, 0).on("click",function () {
        if (c)location.href = c
      }).attr({align: b.position.align, zIndex: 8}).css(b.style).add().align(b.position);
      m.hasRendered = !0
    }

    function V() {
      if (!Pb && ca ==
        ca.top && x.readyState !== "complete" || Fa && !ca.canvg)Fa ? Cc.push(V, v.global.canvasToolsURL) : x.attachEvent("onreadystatechange", function () {
        x.detachEvent("onreadystatechange", V);
        x.readyState === "complete" && V()
      }); else {
        l();
        aa(m, "init");
        if (Highcharts.RangeSelector && v.rangeSelector.enabled)m.rangeSelector = new Highcharts.RangeSelector(m);
        rb();
        sb();
        r();
        i();
        o(v.series || [], function (a) {
          f(a)
        });
        if (Highcharts.Scroller && (v.navigator.enabled || v.scrollbar.enabled))m.scroller = new Highcharts.Scroller(m);
        m.render = Z;
        m.tracker =
          ub = new e(v.tooltip);
        Z();
        I.draw();
        b && b.apply(m, [m]);
        o(m.callbacks, function (a) {
          a.apply(m, [m])
        });
        C && (Ja.appendChild(D), Tb(C));
        aa(m, "load")
      }
    }

    var v, y = a.series;
    a.series = null;
    v = K(Ea, a);
    v.series = a.series = y;
    var q = v.chart, y = q.margin, y = mb(y) ? y : [y, y, y, y], T = p(q.marginTop, y[0]), w = p(q.marginRight, y[1]), E = p(q.marginBottom, y[2]), bb = p(q.marginLeft, y[3]), ia = q.spacingTop, ua = q.spacingRight, R = q.spacingBottom, jb = q.spacingLeft, ib, $, ja, J, ba, M, O, pa, Ja, C, D, na, za, Ca, sa, ra, $a, Za, ma, Na, Sa, da, m = this, kb = (y = q.events) && !!y.click,
      va, Db, vb, Da, xb, pb, Ya, la, ka, ub, db, Xa, Wa, yb, ya, Nb = q.showAxes, La = 0, xa = [], gb, Q = [], U, I, lb, Bb, ob, qb, Wb, rb, sb, tb, zb, Fb, Rb = function () {
        function a(b, c) {
          var d = b.legendItem, e = b.legendLine, g = b.legendSymbol, h = q.color, i = c ? f.itemStyle.color : h, h = c ? b.color : h;
          d && d.css({fill: i});
          e && e.attr({stroke: h});
          g && g.attr({stroke: h, fill: h})
        }

        function b(a) {
          var c = a.legendItem, d = a.legendLine, e = a._legendItemPos, f = e[0], e = e[1], g = a.legendSymbol, a = a.checkbox;
          c && c.attr({x: r ? f : Wa - f, y: e});
          d && d.translate(r ? f : Wa - f, e - 4);
          g && (c = f + g.xOff, g.attr({x: r ?
            c : Wa - c, y: e + g.yOff}));
          if (a)a.x = f, a.y = e
        }

        function c() {
          o(j, function (a) {
            var b = a.checkbox, c = A.alignAttr;
            b && P(b, {left: c.translateX + a.legendItemWidth + b.x - 40 + ga, top: c.translateY + b.y - 11 + ga})
          })
        }

        function d(b) {
          var c, e, j, k, m = b.legendItem;
          k = b.series || b;
          var o = k.options, v = o && o.borderWidth || 0;
          if (!m) {
            k = /^(bar|pie|area|column)$/.test(k.type);
            b.legendItem = m = I.text(f.labelFormatter.call(b), 0, 0, f.useHTML).css(b.visible ? n : q).on("mouseover",function () {
              b.setState(ta);
              m.css(l)
            }).on("mouseout",function () {
                m.css(b.visible ? n : q);
                b.setState()
              }).on("click",function () {
                var a = function () {
                  b.setVisible()
                };
                b.firePointEvent ? b.firePointEvent("legendItemClick", null, a) : aa(b, "legendItemClick", null, a)
              }).attr({align: r ? "left" : "right", zIndex: 2}).add(A);
            if (!k && o && o.lineWidth) {
              var u = {"stroke-width": o.lineWidth, zIndex: 2};
              if (o.dashStyle)u.dashstyle = o.dashStyle;
              b.legendLine = I.path([wa, (-h - i) * (r ? 1 : -1), 0, fa, -i * (r ? 1 : -1), 0]).attr(u).add(A)
            }
            if (k)j = I.rect(c = -h - i, e = -11, h, 12, 2).attr({zIndex: 3}).add(A), r || (c += h); else if (o && o.marker && o.marker.enabled)j =
              o.marker.radius, j = I.symbol(b.symbol, c = -h / 2 - i - j, e = -4 - j, 2 * j, 2 * j).attr(b.pointAttr[Ka]).attr({zIndex: 3}).add(A), r || (c += h / 2);
            if (j)j.xOff = c + v % 2 / 2, j.yOff = e + v % 2 / 2;
            b.legendSymbol = j;
            a(b, b.visible);
            if (o && o.showCheckbox)b.checkbox = Aa("input", {type: "checkbox", checked: b.selected, defaultChecked: b.selected}, f.itemCheckboxStyle, D), ha(b.checkbox, "click", function (a) {
              aa(b, "checkboxClick", {checked: a.target.checked}, function () {
                b.select()
              })
            })
          }
          c = m.getBBox();
          e = b.legendItemWidth = f.itemWidth || h + i + c.width + t;
          w = c.height;
          if (g &&
            s - V + e > (J || sa - 2 * t - V))s = V, z += y + w + p;
          !g && z + f.y + w > ra - ia - R && (z = T, s += Z, Z = 0);
          Z = W(Z, e);
          x = W(x, z + p);
          b._legendItemPos = [s, z];
          g ? s += e : z += y + w + p;
          C = J || W(s - V + (g ? 0 : e), C)
        }

        function e() {
          s = V;
          z = T;
          x = C = 0;
          A || (A = I.g("legend").attr({zIndex: 7}).add());
          j = [];
          o(M, function (a) {
            var b = a.options;
            b.showInLegend && (j = j.concat(a.legendItems || (b.legendType === "point" ? a.data : a)))
          });
          Mc(j, function (a, b) {
            return(a.options.legendIndex || 0) - (b.options.legendIndex || 0)
          });
          jb && j.reverse();
          o(j, d);
          Wa = J || C;
          yb = x - v + w;
          if (E || bb) {
            Wa += 2 * t;
            yb += 2 * t;
            if (ua) {
              if (Wa > 0 &&
                yb > 0)ua[ua.isNew ? "attr" : "animate"](ua.crisp(null, null, null, Wa, yb)), ua.isNew = !1
            } else ua = I.rect(0, 0, Wa, yb, f.borderRadius, E || 0).attr({stroke: f.borderColor, "stroke-width": E || 0, fill: bb || Ma}).add(A).shadow(f.shadow), ua.isNew = !0;
            ua[j.length ? "show" : "hide"]()
          }
          o(j, b);
          for (var a = ["left", "right", "top", "bottom"], g, h = 4; h--;)g = a[h], k[g] && k[g] !== "auto" && (f[h < 2 ? "align" : "verticalAlign"] = g, f[h < 2 ? "x" : "y"] = S(k[g]) * (h % 2 ? -1 : 1));
          j.length && A.align(L(f, {width: Wa, height: yb}), !0, ib);
          La || c()
        }

        var f = m.options.legend;
        if (f.enabled) {
          var g =
            f.layout === "horizontal", h = f.symbolWidth, i = f.symbolPadding, j, k = f.style, n = f.itemStyle, l = f.itemHoverStyle, q = K(n, f.itemHiddenStyle), t = f.padding || S(k.padding), r = !f.rtl, y = f.itemMarginTop || 0, p = f.itemMarginBottom || 0, v = 18, Z = 0, V = 4 + t + h + i, T = t + y + v - 5, s, z, x, w = 0, ua, E = f.borderWidth, bb = f.backgroundColor, A, C, J = f.width, M = m.series, jb = f.reversed;
          e();
          ha(m, "endResize", c);
          return{colorizeItem: a, destroyItem: function (a) {
            var b = a.checkbox;
            o(["legendItem", "legendLine", "legendSymbol"], function (b) {
              a[b] && a[b].destroy()
            });
            b && Tb(a.checkbox)
          },
            renderLegend: e, destroy: function () {
              ua && (ua = ua.destroy());
              A && (A = A.destroy())
            }}
        }
      };
    Db = function (a, b) {
      return a >= 0 && a <= ka && b >= 0 && b <= la
    };
    Fb = function () {
      var a = m.resetZoomButton;
      aa(m, "selection", {resetSelection: !0}, zb);
      if (a)m.resetZoomButton = a.destroy()
    };
    zb = function (a) {
      var b;
      m.resetZoomEnabled !== !1 && !m.resetZoomButton && k();
      !a || a.resetSelection ? o(xa, function (a) {
        a.options.zoomEnabled !== !1 && (a.setExtremes(null, null, !1), b = !0)
      }) : o(a.xAxis.concat(a.yAxis), function (a) {
        var c = a.axis;
        if (m.tracker[c.isXAxis ? "zoomX" : "zoomY"])c.setExtremes(a.min,
          a.max, !1), b = !0
      });
      b && h(p(q.animation, m.pointCount < 100))
    };
    m.pan = function (a) {
      var b = m.xAxis[0], c = m.mouseDownX, d = b.pointRange / 2, e = b.getExtremes(), f = b.translate(c - a, !0) + d, c = b.translate(c + ka - a, !0) - d;
      (d = m.hoverPoints) && o(d, function (a) {
        a.setState()
      });
      f > Ua(e.dataMin, e.min) && c < W(e.dataMax, e.max) && b.setExtremes(f, c, !0, !1);
      m.mouseDownX = a;
      P(D, {cursor: "move"})
    };
    Wb = function () {
      var a = v.legend, b = p(a.margin, 10), c = a.x, d = a.y, e = a.align, f = a.verticalAlign, g;
      rb();
      if ((m.title || m.subtitle) && !s(T))(g = W(m.title && !$.floating && !$.verticalAlign && $.y || 0, m.subtitle && !ja.floating && !ja.verticalAlign && ja.y || 0)) && (J = W(J, g + p($.margin, 15) + ia));
      a.enabled && !a.floating && (e === "right" ? s(w) || (ba = W(ba, Wa - c + b + ua)) : e === "left" ? s(bb) || (O = W(O, Wa + c + b + jb)) : f === "top" ? s(T) || (J = W(J, yb + d + b + ia)) : f === "bottom" && (s(E) || (M = W(M, yb - d + b + R))));
      m.extraBottomMargin && (M += m.extraBottomMargin);
      m.extraTopMargin && (J += m.extraTopMargin);
      Nb && o(xa, function (a) {
        a.getOffset()
      });
      s(bb) || (O += pa[3]);
      s(T) || (J += pa[0]);
      s(E) || (M += pa[2]);
      s(w) || (ba += pa[1]);
      sb()
    };
    tb = function (a, b, c) {
      var d = m.title, e = m.subtitle;
      La += 1;
      Kb(c, m);
      Za = ra;
      $a = sa;
      if (s(a))m.chartWidth = sa = z(a);
      if (s(b))m.chartHeight = ra = z(b);
      P(D, {width: sa + ga, height: ra + ga});
      I.setSize(sa, ra, c);
      ka = sa - O - ba;
      la = ra - J - M;
      gb = null;
      o(xa, function (a) {
        a.isDirty = !0;
        a.setScale()
      });
      o(Q, function (a) {
        a.isDirty = !0
      });
      m.isDirtyLegend = !0;
      m.isDirtyBox = !0;
      Wb();
      d && d.align(null, null, ib);
      e && e.align(null, null, ib);
      h(c);
      Za = null;
      aa(m, "resize");
      Ub === !1 ? t() : setTimeout(t, Ub && Ub.duration || 500)
    };
    sb = function () {
      m.plotLeft = O = z(O);
      m.plotTop = J = z(J);
      m.plotWidth = ka =
        z(sa - O - ba);
      m.plotHeight = la = z(ra - J - M);
      m.plotSizeX = U ? la : ka;
      m.plotSizeY = U ? ka : la;
      ib = {x: jb, y: ia, width: sa - jb - ua, height: ra - ia - R};
      o(xa, function (a) {
        a.setAxisSize();
        a.setAxisTranslation()
      })
    };
    rb = function () {
      J = p(T, ia);
      ba = p(w, ua);
      M = p(E, R);
      O = p(bb, jb);
      pa = [0, 0, 0, 0]
    };
    qb = function () {
      var a = q.borderWidth || 0, b = q.backgroundColor, c = q.plotBackgroundColor, d = q.plotBackgroundImage, e, f = {x: O, y: J, width: ka, height: la};
      e = a + (q.shadow ? 8 : 0);
      if (a || b)ma ? ma.animate(ma.crisp(null, null, null, sa - e, ra - e)) : ma = I.rect(e / 2, e / 2, sa - e, ra - e, q.borderRadius,
        a).attr({stroke: q.borderColor, "stroke-width": a, fill: b || Ma}).add().shadow(q.shadow);
      c && (Na ? Na.animate(f) : Na = I.rect(O, J, ka, la, 0).attr({fill: c}).add().shadow(q.plotShadow));
      d && (Sa ? Sa.animate(f) : Sa = I.image(d, O, J, ka, la).add());
      q.plotBorderWidth && (da ? da.animate(da.crisp(null, O, J, ka, la)) : da = I.rect(O, J, ka, la, 0, q.plotBorderWidth).attr({stroke: q.plotBorderColor, "stroke-width": q.plotBorderWidth, zIndex: 4}).add());
      m.isDirtyBox = !1
    };
    q.reflow !== !1 && ha(m, "load", n);
    if (y)for (va in y)ha(m, va, y[va]);
    m.options = v;
    m.series =
      Q;
    m.xAxis = [];
    m.yAxis = [];
    m.addSeries = function (a, b, c) {
      var d;
      a && (Kb(c, m), b = p(b, !0), aa(m, "addSeries", {options: a}, function () {
        d = f(a);
        d.isDirty = !0;
        m.isDirtyLegend = !0;
        b && m.redraw()
      }));
      return d
    };
    m.animation = Fa ? !1 : p(q.animation, !0);
    m.Axis = c;
    m.destroy = function () {
      var a, b = D && D.parentNode;
      if (m !== null) {
        aa(m, "destroy");
        Qa(m);
        for (a = xa.length; a--;)xa[a] = xa[a].destroy();
        for (a = Q.length; a--;)Q[a] = Q[a].destroy();
        o("title,subtitle,seriesGroup,clipRect,credits,tracker,scroller,rangeSelector".split(","), function (a) {
          var b =
            m[a];
          b && (m[a] = b.destroy())
        });
        o([ma, da, Na, Xa, vb, I, ub], function (a) {
          a && a.destroy && a.destroy()
        });
        ma = da = Na = Xa = vb = I = ub = null;
        if (D)D.innerHTML = "", Qa(D), b && Tb(D), D = null;
        clearInterval(Bb);
        for (a in m)delete m[a];
        v = m = null
      }
    };
    m.get = function (a) {
      var b, c, d;
      for (b = 0; b < xa.length; b++)if (xa[b].options.id === a)return xa[b];
      for (b = 0; b < Q.length; b++)if (Q[b].options.id === a)return Q[b];
      for (b = 0; b < Q.length; b++) {
        d = Q[b].points || [];
        for (c = 0; c < d.length; c++)if (d[c].id === a)return d[c]
      }
      return null
    };
    m.getSelectedPoints = function () {
      var a =
        [];
      o(Q, function (b) {
        a = a.concat(nc(b.points, function (a) {
          return a.selected
        }))
      });
      return a
    };
    m.getSelectedSeries = function () {
      return nc(Q, function (a) {
        return a.selected
      })
    };
    m.hideLoading = function () {
      xb && cc(xb, {opacity: 0}, {duration: v.loading.hideDuration || 100, complete: function () {
        P(xb, {display: Ma})
      }});
      Ya = !1
    };
    m.initSeries = f;
    m.isInsidePlot = Db;
    m.redraw = h;
    m.setSize = tb;
    m.setTitle = j;
    m.showLoading = function (a) {
      var b = v.loading;
      xb || (xb = Aa(Ra, {className: Ia + "loading"}, L(b.style, {left: O + ga, top: J + ga, width: ka + ga, height: la + ga,
        zIndex: 10, display: Ma}), D), pb = Aa("span", null, b.labelStyle, xb));
      pb.innerHTML = a || v.lang.loading;
      Ya || (P(xb, {opacity: 0, display: ""}), cc(xb, {opacity: b.style.opacity}, {duration: b.showDuration || 0}), Ya = !0)
    };
    m.pointCount = 0;
    m.counters = new tc;
    V()
  }

  var X, x = document, ca = window, oa = Math, z = oa.round, Ta = oa.floor, Yb = oa.ceil, W = oa.max, Ua = oa.min, Ba = oa.abs, ja = oa.cos, C = oa.sin, da = oa.PI, Dc = da * 2 / 360, kb = navigator.userAgent, Qb = /msie/i.test(kb) && !ca.opera, Xa = x.documentMode === 8, Ec = /AppleWebKit/.test(kb), Bc = /Firefox/.test(kb), Pb = !!x.createElementNS && !!x.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, Qc = Bc && parseInt(kb.split("Firefox/")[1], 10) < 4, Fa = !Pb && !Qb && !!x.createElement("canvas").getContext, Xb, Ga = x.documentElement.ontouchstart !== X, Fc = {}, lc = 0, tb, Ea, ac, Ub, La, E, Ra = "div", wb = "absolute", mc = "relative", ab = "hidden", Ia = "highcharts-", eb = "visible", ga = "px", Ma = "none", wa = "M", fa = "L", Gc = "rgba(192,192,192," + (Pb ? 1.0E-6 : 0.0020) + ")", Ka = "", ta = "hover", Rb = "millisecond", ob = "second", pb = "minute", va = "hour", Ca = "day", Ya = "week", Da = "month", Za = "year",
    sb, fc, gc, ic, db, qb, rb, pc, qc, hc, rc, sc, w = ca.HighchartsAdapter, na = w || {}, Hc = na.getScript, o = na.each, nc = na.grep, Ac = na.offset, Vb = na.map, K = na.merge, ha = na.addEvent, Qa = na.removeEvent, aa = na.fireEvent, cc = na.animate, Ob = na.stop, Ha = {};
  ca.Highcharts = {};
  ac = function (a, b, c) {
    if (!s(b) || isNaN(b))return"Invalid date";
    var a = p(a, "%Y-%m-%d %H:%M:%S"), d = new Date(b), e, f = d[gc](), g = d[ic](), h = d[db](), i = d[qb](), k = d[rb](), j = Ea.lang, l = j.weekdays, b = {a: l[g].substr(0, 3), A: l[g], d: Na(h), e: h, b: j.shortMonths[i], B: j.months[i], m: Na(i + 1), y: k.toString().substr(2,
      2), Y: k, H: Na(f), I: Na(f % 12 || 12), l: f % 12 || 12, M: Na(d[fc]()), p: f < 12 ? "AM" : "PM", P: f < 12 ? "am" : "pm", S: Na(d.getSeconds()), L: Na(z(b % 1E3), 3)};
    for (e in b)a = a.replace("%" + e, b[e]);
    return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
  };
  tc.prototype = {wrapColor: function (a) {
    if (this.color >= a)this.color = 0
  }, wrapSymbol: function (a) {
    if (this.symbol >= a)this.symbol = 0
  }};
  E = za(Rb, 1, ob, 1E3, pb, 6E4, va, 36E5, Ca, 864E5, Ya, 6048E5, Da, 2592E6, Za, 31556952E3);
  La = {init: function (a, b, c) {
    var b = b || "", d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, g, b = b.split(" "),
      c = [].concat(c), h, i, k = function (a) {
        for (g = a.length; g--;)a[g] === wa && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
      };
    e && (k(b), k(c));
    a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
    d === 1 && (c = [].concat(c).splice(0, f).concat(c));
    a.shift = 0;
    if (b.length)for (a = c.length; b.length < a;)d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
    h && (b = b.concat(h), c = c.concat(i));
    return[b, c]
  }, step: function (a, b, c, d) {
    var e = [], f = a.length;
    if (c === 1)e = d; else if (f === b.length && c < 1)for (; f--;)d =
      parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b;
    return e
  }};
  w && w.init && w.init(La);
  if (!w && ca.jQuery) {
    var ba = jQuery, Hc = ba.getScript, o = function (a, b) {
      for (var c = 0, d = a.length; c < d; c++)if (b.call(a[c], a[c], c, a) === !1)return c
    }, nc = ba.grep, Vb = function (a, b) {
      for (var c = [], d = 0, e = a.length; d < e; d++)c[d] = b.call(a[d], a[d], d, a);
      return c
    }, K = function () {
      var a = arguments;
      return ba.extend(!0, null, a[0], a[1], a[2], a[3])
    }, Ac = function (a) {
      return ba(a).offset()
    }, ha = function (a, b, c) {
      ba(a).bind(b, c)
    }, Qa = function (a, b, c) {
      var d = x.removeEventListener ? "removeEventListener" : "detachEvent";
      x[d] && !a[d] && (a[d] = function () {
      });
      ba(a).unbind(b, c)
    }, aa = function (a, b, c, d) {
      var e = ba.Event(b), f = "detached" + b, g;
      L(e, c);
      a[b] && (a[f] = a[b], a[b] = null);
      o(["preventDefault", "stopPropagation"], function (a) {
        var b = e[a];
        e[a] = function () {
          try {
            b.call(e)
          } catch (c) {
            a === "preventDefault" && (g = !0)
          }
        }
      });
      ba(a).trigger(e);
      a[f] && (a[b] = a[f], a[f] = null);
      d && !e.isDefaultPrevented() && !g && d(e)
    }, cc = function (a, b, c) {
      var d = ba(a);
      if (b.d)a.toD = b.d, b.d = 1;
      d.stop();
      d.animate(b,
        c)
    }, Ob = function (a) {
      ba(a).stop()
    };
    ba.extend(ba.easing, {easeOutQuad: function (a, b, c, d, e) {
      return-d * (b /= e) * (b - 2) + c
    }});
    var Ic = jQuery.fx, Jc = Ic.step;
    o(["cur", "_default", "width", "height"], function (a, b) {
      var c = b ? Jc : Ic.prototype, d = c[a], e;
      d && (c[a] = function (a) {
        a = b ? a : this;
        e = a.elem;
        return e.attr ? e.attr(a.prop, a.now) : d.apply(this, arguments)
      })
    });
    Jc.d = function (a) {
      var b = a.elem;
      if (!a.started) {
        var c = La.init(b, b.d, b.toD);
        a.start = c[0];
        a.end = c[1];
        a.started = !0
      }
      b.attr("d", La.step(a.start, a.end, a.pos, b.toD))
    }
  }
  w = {enabled: !0,
    align: "center", x: 0, y: 15, style: {color: "#666", fontSize: "11px", lineHeight: "14px"}};
  Ea = {colors: "#4572A7,#AA4643,#89A54E,#80699B,#3D96AE,#DB843D,#92A8CD,#A47D7C,#B5CA92".split(","), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {loading: "Loading...", months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    decimalPoint: ".", resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: ","}, global: {useUTC: !0, canvasToolsURL: "http://code.highcharts.com/2.2.1/modules/canvas-tools.js"}, chart: {borderColor: "#4572A7", borderRadius: 5, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacingTop: 10, spacingRight: 10, spacingBottom: 15, spacingLeft: 10, style: {fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize: "12px"}, backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0",
    resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}}, title: {text: "Chart title", align: "center", y: 15, style: {color: "#3E576F", fontSize: "16px"}}, subtitle: {text: "", align: "center", y: 30, style: {color: "#6D869F"}}, plotOptions: {line: {allowPointSelect: !1, showCheckbox: !1, animation: {duration: 1E3}, events: {}, lineWidth: 2, shadow: !0, marker: {enabled: !0, lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: {hover: {}, select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}}}, point: {events: {}}, dataLabels: K(w,
    {enabled: !1, y: -6, formatter: function () {
      return this.y
    }}), cropThreshold: 300, pointRange: 0, showInLegend: !0, states: {hover: {marker: {}}, select: {marker: {}}}, stickyTracking: !0}}, labels: {style: {position: wb, color: "#3E576F"}}, legend: {enabled: !0, align: "center", layout: "horizontal", labelFormatter: function () {
    return this.name
  }, borderWidth: 1, borderColor: "#909090", borderRadius: 5, shadow: !1, style: {padding: "5px"}, itemStyle: {cursor: "pointer", color: "#3E576F"}, itemHoverStyle: {color: "#000000"}, itemHiddenStyle: {color: "#C0C0C0"},
    itemCheckboxStyle: {position: wb, width: "13px", height: "13px"}, symbolWidth: 16, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0}, loading: {labelStyle: {fontWeight: "bold", position: mc, top: "1em"}, style: {position: wb, backgroundColor: "white", opacity: 0.5, textAlign: "center"}}, tooltip: {enabled: !0, backgroundColor: "rgba(255, 255, 255, .85)", borderWidth: 2, borderRadius: 5, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
    shadow: !0, shared: Fa, snap: Ga ? 25 : 10, style: {color: "#333333", fontSize: "12px", padding: "5px", whiteSpace: "nowrap"}}, credits: {enabled: !0, text: "Highcharts.com", href: "http://www.highcharts.com", position: {align: "right", x: -10, verticalAlign: "bottom", y: -5}, style: {cursor: "pointer", color: "#909090", fontSize: "10px"}}};
  var $b = {dateTimeLabelFormats: za(Rb, "%H:%M:%S.%L", ob, "%H:%M:%S", pb, "%H:%M", va, "%H:%M", Ca, "%e. %b", Ya, "%e. %b", Da, "%b '%y", Za, "%Y"), endOnTick: !1, gridLineColor: "#C0C0C0", labels: w, lineColor: "#C0D0E0", lineWidth: 1,
    max: null, min: null, minPadding: 0.01, maxPadding: 0.01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 5, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", tickWidth: 1, title: {align: "middle", style: {color: "#6D869F", fontWeight: "bold"}}, type: "linear"}, kc = K($b, {endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: {align: "right", x: -8,
    y: 3}, lineWidth: 0, maxPadding: 0.05, minPadding: 0.05, startOnTick: !0, tickWidth: 0, title: {rotation: 270, text: "Y-values"}, stackLabels: {enabled: !1, formatter: function () {
    return this.total
  }, style: w.style}}), Pc = {labels: {align: "right", x: -8, y: null}, title: {rotation: 270}}, Oc = {labels: {align: "left", x: 8, y: null}, title: {rotation: 90}}, zc = {labels: {align: "center", x: 0, y: 14, overflow: "justify"}, title: {rotation: 0}}, Nc = K(zc, {labels: {y: -5, overflow: "justify"}}), M = Ea.plotOptions, w = M.line;
  M.spline = K(w);
  M.scatter = K(w, {lineWidth: 0, states: {hover: {lineWidth: 0}},
    tooltip: {headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});
  M.area = K(w, {threshold: 0});
  M.areaspline = K(M.area);
  M.column = K(w, {borderColor: "#FFFFFF", borderWidth: 1, borderRadius: 0, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: {hover: {brightness: 0.1, shadow: !1}, select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}}, dataLabels: {y: null, verticalAlign: null},
    threshold: 0});
  M.bar = K(M.column, {dataLabels: {align: "left", x: 5, y: null, verticalAlign: "middle"}});
  M.pie = K(w, {borderColor: "#FFFFFF", borderWidth: 1, center: ["50%", "50%"], colorByPoint: !0, dataLabels: {distance: 30, enabled: !0, formatter: function () {
    return this.point.name
  }, y: 5}, legendType: "point", marker: null, size: "75%", showInLegend: !1, slicedOffset: 10, states: {hover: {brightness: 0.1, shadow: !1}}});
  vc();
  var ma = function (a) {
    var b = [], c;
    (function (a) {
      (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a)) ?
        b = [S(c[1]), S(c[2]), S(c[3]), parseFloat(c[4], 10)] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)) && (b = [S(c[1], 16), S(c[2], 16), S(c[3], 16), 1])
    })(a);
    return{get: function (c) {
      return b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a
    }, brighten: function (a) {
      if (Bb(a) && a !== 0) {
        var c;
        for (c = 0; c < 3; c++)b[c] += S(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
      }
      return this
    }, setOpacity: function (a) {
      b[3] = a;
      return this
    }}
  };
  Sa.prototype = {init: function (a, b) {
    this.element =
      b === "span" ? Aa(b) : x.createElementNS("http://www.w3.org/2000/svg", b);
    this.renderer = a;
    this.attrSetters = {}
  }, animate: function (a, b, c) {
    b = p(b, Ub, !0);
    Ob(this);
    if (b) {
      b = K(b);
      if (c)b.complete = c;
      cc(this, a, b)
    } else this.attr(a), c && c()
  }, attr: function (a, b) {
    var c, d, e, f, g = this.element, h = g.nodeName, i = this.renderer, k, j = this.attrSetters, l = this.shadows, n, o = this;
    Ab(a) && s(b) && (c = a, a = {}, a[c] = b);
    if (Ab(a))c = a, h === "circle" ? c = {x: "cx", y: "cy"}[c] || c : c === "strokeWidth" && (c = "stroke-width"), o = A(g, c) || this[c] || 0, c !== "d" && c !== "visibility" &&
      (o = parseFloat(o)); else for (c in a)if (k = !1, d = a[c], e = j[c] && j[c](d, c), e !== !1) {
      e !== X && (d = e);
      if (c === "d")d && d.join && (d = d.join(" ")), /(NaN| {2}|^$)/.test(d) && (d = "M 0 0"), this.d = d; else if (c === "x" && h === "text") {
        for (e = 0; e < g.childNodes.length; e++)f = g.childNodes[e], A(f, "x") === A(g, "x") && A(f, "x", d);
        this.rotation && A(g, "transform", "rotate(" + this.rotation + " " + d + " " + S(a.y || A(g, "y")) + ")")
      } else if (c === "fill")d = i.color(d, g, c); else if (h === "circle" && (c === "x" || c === "y"))c = {x: "cx", y: "cy"}[c] || c; else if (h === "rect" && c === "r")A(g,
        {rx: d, ry: d}), k = !0; else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign")this[c] = d, this.updateTransform(), k = !0; else if (c === "stroke")d = i.color(d, g, c); else if (c === "dashstyle")if (c = "stroke-dasharray", d = d && d.toLowerCase(), d === "solid")d = Ma; else {
        if (d) {
          d = d.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
          for (e = d.length; e--;)d[e] = S(d[e]) * a["stroke-width"];
          d = d.join(",")
        }
      } else c === "isTracker" ? this[c] = d : c === "width" ? d = S(d) : c === "align" ? (c = "text-anchor", d = {left: "start", center: "middle", right: "end"}[d]) : c === "title" && (e = x.createElementNS("http://www.w3.org/2000/svg", "title"), e.appendChild(x.createTextNode(d)), g.appendChild(e));
      c === "strokeWidth" && (c = "stroke-width");
      Ec && c === "stroke-width" && d === 0 && (d = 1.0E-6);
      this.symbolName && /^(x|y|r|start|end|innerR|anchorX|anchorY)/.test(c) && (n || (this.symbolAttr(a), n = !0), k = !0);
      if (l && /^(width|height|visibility|x|y|d|transform)$/.test(c))for (e = l.length; e--;)A(l[e], c, d);
      if ((c === "width" || c === "height") && h === "rect" && d < 0)d = 0;
      c === "text" ? (this.textStr = d, this.added && i.buildText(this)) : k || A(g, c, d)
    }
    if (Ec && /Chrome\/(18|19)/.test(kb) && h === "text" && (a.x !== X || a.y !== X))c = g.parentNode, d = g.nextSibling, c && (c.removeChild(g), d ? c.insertBefore(g, d) : c.appendChild(g));
    return o
  }, symbolAttr: function (a) {
    var b = this;
    o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (c) {
      b[c] =
        p(a[c], b[c])
    });
    b.attr({d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)})
  }, clip: function (a) {
    return this.attr("clip-path", "url(" + this.renderer.url + "#" + a.id + ")")
  }, crisp: function (a, b, c, d, e) {
    var f, g = {}, h = {}, i, a = a || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
    i = z(a) % 2 / 2;
    h.x = Ta(b || this.x || 0) + i;
    h.y = Ta(c || this.y || 0) + i;
    h.width = Ta((d || this.width || 0) - 2 * i);
    h.height = Ta((e || this.height || 0) - 2 * i);
    h.strokeWidth = a;
    for (f in h)this[f] !== h[f] && (this[f] = g[f] = h[f]);
    return g
  }, css: function (a) {
    var b =
      this.element, b = a && a.width && b.nodeName === "text", c, d = "", e = function (a, b) {
      return"-" + b.toLowerCase()
    };
    if (a && a.color)a.fill = a.color;
    this.styles = a = L(this.styles, a);
    if (Qb && !Pb)b && delete a.width, P(this.element, a); else {
      for (c in a)d += c.replace(/([A-Z])/g, e) + ":" + a[c] + ";";
      this.attr({style: d})
    }
    b && this.added && this.renderer.buildText(this);
    return this
  }, on: function (a, b) {
    var c = b;
    Ga && a === "click" && (a = "touchstart", c = function (a) {
      a.preventDefault();
      b()
    });
    this.element["on" + a] = c;
    return this
  }, translate: function (a, b) {
    return this.attr({translateX: a,
      translateY: b})
  }, invert: function () {
    this.inverted = !0;
    this.updateTransform();
    return this
  }, htmlCss: function (a) {
    var b = this.element;
    if (b = a && b.tagName === "SPAN" && a.width)delete a.width, this.textWidth = b, this.updateTransform();
    this.styles = L(this.styles, a);
    P(this.element, a);
    return this
  }, htmlGetBBox: function (a) {
    var b = this.element, c = this.bBox;
    if (!c || a) {
      if (b.nodeName === "text")b.style.position = wb;
      c = this.bBox = {x: b.offsetLeft, y: b.offsetTop, width: b.offsetWidth, height: b.offsetHeight}
    }
    return c
  }, htmlUpdateTransform: function () {
    if (this.added) {
      var a =
        this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = {left: 0, center: 0.5, right: 1}[g], i = g && g !== "left", k = this.shadows;
      if (c || d)P(b, {marginLeft: c, marginTop: d}), k && o(k, function (a) {
        P(a, {marginLeft: c + 1, marginTop: d + 1})
      });
      this.inverted && o(b.childNodes, function (c) {
        a.invertChild(c, b)
      });
      if (b.tagName === "SPAN") {
        var j, l, k = this.rotation, n;
        j = 0;
        var t = 1, r = 0, Z;
        n = S(this.textWidth);
        var V = this.xCorr || 0, v = this.yCorr || 0, y = [k, g, b.innerHTML, this.textWidth].join(",");
        if (y !== this.cTT)s(k) && (j = k * Dc, t = ja(j), r = C(j), P(b, {filter: k ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", t, ", M12=", -r, ", M21=", r, ", M22=", t, ", sizingMethod='auto expand')"].join("") : Ma})), j = p(this.elemWidth, b.offsetWidth), l = p(this.elemHeight, b.offsetHeight), j > n && (P(b, {width: n + ga, display: "block", whiteSpace: "normal"}), j = n), n = a.fontMetrics(b.style.fontSize).b, V = t < 0 && -j, v = r < 0 && -l, Z = t * r < 0, V += r * n * (Z ? 1 - h : h), v -= t * n * (k ? Z ? h : 1 - h : 1), i && (V -= j * h * (t < 0 ? -1 : 1), k && (v -= l * h * (r < 0 ? -1 : 1)), P(b, {textAlign: g})), this.xCorr =
          V, this.yCorr = v;
        P(b, {left: e + V + ga, top: f + v + ga});
        this.cTT = y
      }
    } else this.alignOnAdd = !0
  }, updateTransform: function () {
    var a = this.translateX || 0, b = this.translateY || 0, c = this.inverted, d = this.rotation, e = [];
    c && (a += this.attr("width"), b += this.attr("height"));
    (a || b) && e.push("translate(" + a + "," + b + ")");
    c ? e.push("rotate(90) scale(-1,1)") : d && e.push("rotate(" + d + " " + this.x + " " + this.y + ")");
    e.length && A(this.element, "transform", e.join(" "))
  }, toFront: function () {
    var a = this.element;
    a.parentNode.appendChild(a);
    return this
  }, align: function (a, b, c) {
    a ? (this.alignOptions = a, this.alignByTranslate = b, c || this.renderer.alignedObjects.push(this)) : (a = this.alignOptions, b = this.alignByTranslate);
    var c = p(c, this.renderer), d = a.align, e = a.verticalAlign, f = (c.x || 0) + (a.x || 0), g = (c.y || 0) + (a.y || 0), h = {};
    /^(right|center)$/.test(d) && (f += (c.width - (a.width || 0)) / {right: 1, center: 2}[d]);
    h[b ? "translateX" : "x"] = z(f);
    /^(bottom|middle)$/.test(e) && (g += (c.height - (a.height || 0)) / ({bottom: 1, middle: 2}[e] || 1));
    h[b ? "translateY" : "y"] = z(g);
    this[this.placed ? "animate" : "attr"](h);
    this.placed = !0;
    this.alignAttr = h;
    return this
  }, getBBox: function (a) {
    var b, c, d = this.rotation;
    c = this.element;
    var e = d * Dc;
    if (c.namespaceURI === "http://www.w3.org/2000/svg") {
      try {
        b = c.getBBox ? L({}, c.getBBox()) : {width: c.offsetWidth, height: c.offsetHeight}
      } catch (f) {
      }
      if (!b || b.width < 0)b = {width: 0, height: 0};
      a = b.width;
      c = b.height;
      if (d)b.width = Ba(c * C(e)) + Ba(a * ja(e)), b.height = Ba(c * ja(e)) + Ba(a * C(e))
    } else b = this.htmlGetBBox(a);
    return b
  }, show: function () {
    return this.attr({visibility: eb})
  }, hide: function () {
    return this.attr({visibility: ab})
  },
    add: function (a) {
      var b = this.renderer, c = a || b, d = c.element || b.box, e = d.childNodes, f = this.element, g = A(f, "zIndex"), h;
      this.parentInverted = a && a.inverted;
      this.textStr !== void 0 && b.buildText(this);
      if (g)c.handleZ = !0, g = S(g);
      if (c.handleZ)for (c = 0; c < e.length; c++)if (a = e[c], b = A(a, "zIndex"), a !== f && (S(b) > g || !s(g) && s(b))) {
        d.insertBefore(f, a);
        h = !0;
        break
      }
      h || d.appendChild(f);
      this.added = !0;
      aa(this, "add");
      return this
    }, safeRemoveChild: function (a) {
      var b = a.parentNode;
      b && b.removeChild(a)
    }, destroy: function () {
      var a = this, b = a.element ||
      {}, c = a.shadows, d = a.box, e, f;
      b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = null;
      Ob(a);
      if (a.clipPath)a.clipPath = a.clipPath.destroy();
      if (a.stops) {
        for (f = 0; f < a.stops.length; f++)a.stops[f] = a.stops[f].destroy();
        a.stops = null
      }
      a.safeRemoveChild(b);
      c && o(c, function (b) {
        a.safeRemoveChild(b)
      });
      d && d.destroy();
      Gb(a.renderer.alignedObjects, a);
      for (e in a)delete a[e];
      return null
    }, empty: function () {
      for (var a = this.element, b = a.childNodes, c = b.length; c--;)a.removeChild(b[c])
    }, shadow: function (a, b) {
      var c = [], d, e, f = this.element,
        g = this.parentInverted ? "(-1,-1)" : "(1,1)";
      if (a) {
        for (d = 1; d <= 3; d++)e = f.cloneNode(0), A(e, {isShadow: "true", stroke: "rgb(0, 0, 0)", "stroke-opacity": 0.05 * d, "stroke-width": 7 - 2 * d, transform: "translate" + g, fill: Ma}), b ? b.element.appendChild(e) : f.parentNode.insertBefore(e, f), c.push(e);
        this.shadows = c
      }
      return this
    }};
  var Eb = function () {
    this.init.apply(this, arguments)
  };
  Eb.prototype = {Element: Sa, init: function (a, b, c, d) {
    var e = location, f;
    f = this.createElement("svg").attr({xmlns: "http://www.w3.org/2000/svg", version: "1.1"});
    a.appendChild(f.element);
    this.isSVG = !0;
    this.box = f.element;
    this.boxWrapper = f;
    this.alignedObjects = [];
    this.url = Qb ? "" : e.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1");
    this.defs = this.createElement("defs").add();
    this.forExport = d;
    this.gradients = {};
    this.setSize(b, c, !1)
  }, destroy: function () {
    var a = this.defs;
    this.box = null;
    this.boxWrapper = this.boxWrapper.destroy();
    Jb(this.gradients || {});
    this.gradients = null;
    if (a)this.defs = a.destroy();
    return this.alignedObjects = null
  }, createElement: function (a) {
    var b = new this.Element;
    b.init(this, a);
    return b
  }, draw: function () {
  }, buildText: function (a) {
    for (var b = a.element, c = p(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), d = b.childNodes, e = /style="([^"]+)"/, f = /href="([^"]+)"/, g = A(b, "x"), h = a.styles, i = h && S(h.width), k = h && h.lineHeight, j, h = d.length; h--;)b.removeChild(d[h]);
    i && !a.added && this.box.appendChild(b);
    c[c.length - 1] === "" &&
    c.pop();
    o(c, function (c, d) {
      var h, r = 0, p, c = c.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
      h = c.split("|||");
      o(h, function (c) {
        if (c !== "" || h.length === 1) {
          var l = {}, o = x.createElementNS("http://www.w3.org/2000/svg", "tspan");
          e.test(c) && A(o, "style", c.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
          f.test(c) && (A(o, "onclick", 'location.href="' + c.match(f)[1] + '"'), P(o, {cursor: "pointer"}));
          c = (c.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
          o.appendChild(x.createTextNode(c));
          r ? l.dx = 3 : l.x = g;
          if (!r) {
            if (d) {
              !Pb && a.renderer.forExport && P(o, {display: "block"});
              p = ca.getComputedStyle && S(ca.getComputedStyle(j, null).getPropertyValue("line-height"));
              if (!p || isNaN(p))p = k || j.offsetHeight || 18;
              A(o, "dy", p)
            }
            j = o
          }
          A(o, l);
          b.appendChild(o);
          r++;
          if (i)for (var c = c.replace(/-/g, "- ").split(" "), q, T = []; c.length || T.length;)q = a.getBBox().width, l = q > i, !l || c.length === 1 ? (c = T, T = [], c.length && (o = x.createElementNS("http://www.w3.org/2000/svg", "tspan"), A(o, {dy: k || 16, x: g}), b.appendChild(o), q > i && (i = q))) : (o.removeChild(o.firstChild),
            T.unshift(c.pop())), c.length && o.appendChild(x.createTextNode(c.join(" ").replace(/- /g, "-")))
        }
      })
    })
  }, button: function (a, b, c, d, e, f, g) {
    var h = this.label(a, b, c), i = 0, k, j, l, n, o, a = {x1: 0, y1: 0, x2: 0, y2: 1}, e = K(za("stroke-width", 1, "stroke", "#999", "fill", za("linearGradient", a, "stops", [
      [0, "#FFF"],
      [1, "#DDD"]
    ]), "r", 3, "padding", 3, "style", za("color", "black")), e);
    l = e.style;
    delete e.style;
    f = K(e, za("stroke", "#68A", "fill", za("linearGradient", a, "stops", [
      [0, "#FFF"],
      [1, "#ACF"]
    ])), f);
    n = f.style;
    delete f.style;
    g = K(e, za("stroke",
      "#68A", "fill", za("linearGradient", a, "stops", [
        [0, "#9BD"],
        [1, "#CDF"]
      ])), g);
    o = g.style;
    delete g.style;
    ha(h.element, "mouseenter", function () {
      h.attr(f).css(n)
    });
    ha(h.element, "mouseleave", function () {
      k = [e, f, g][i];
      j = [l, n, o][i];
      h.attr(k).css(j)
    });
    h.setState = function (a) {
      (i = a) ? a === 2 && h.attr(g).css(o) : h.attr(e).css(l)
    };
    return h.on("click",function () {
      d.call(h)
    }).attr(e).css(L({cursor: "default"}, l))
  }, crispLine: function (a, b) {
    a[1] === a[4] && (a[1] = a[4] = z(a[1]) + b % 2 / 2);
    a[2] === a[5] && (a[2] = a[5] = z(a[2]) + b % 2 / 2);
    return a
  }, path: function (a) {
    return this.createElement("path").attr({d: a,
      fill: Ma})
  }, circle: function (a, b, c) {
    a = mb(a) ? a : {x: a, y: b, r: c};
    return this.createElement("circle").attr(a)
  }, arc: function (a, b, c, d, e, f) {
    if (mb(a))b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
    return this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {innerR: d || 0, start: e || 0, end: f || 0})
  }, rect: function (a, b, c, d, e, f) {
    if (mb(a))b = a.y, c = a.width, d = a.height, e = a.r, f = a.strokeWidth, a = a.x;
    e = this.createElement("rect").attr({rx: e, ry: e, fill: Ma});
    return e.attr(e.crisp(f, a, b, W(c, 0), W(d, 0)))
  }, setSize: function (a, b, c) {
    var d = this.alignedObjects,
      e = d.length;
    this.width = a;
    this.height = b;
    for (this.boxWrapper[p(c, !0) ? "animate" : "attr"]({width: a, height: b}); e--;)d[e].align()
  }, g: function (a) {
    var b = this.createElement("g");
    return s(a) ? b.attr({"class": Ia + a}) : b
  }, image: function (a, b, c, d, e) {
    var f = {preserveAspectRatio: Ma};
    arguments.length > 1 && L(f, {x: b, y: c, width: d, height: e});
    f = this.createElement("image").attr(f);
    f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
    return f
  }, symbol: function (a, b, c, d, e, f) {
    var g, h = this.symbols[a], h = h && h(z(b), z(c), d, e, f), i = /^url\((.*?)\)$/, k;
    if (h)g = this.path(h), L(g, {symbolName: a, x: b, y: c, width: d, height: e}), f && L(g, f); else if (i.test(a)) {
      var j = function (a, b) {
        a.attr({width: b[0], height: b[1]}).translate(-z(b[0] / 2), -z(b[1] / 2))
      };
      k = a.match(i)[1];
      a = Fc[k];
      g = this.image(k).attr({x: b, y: c});
      a ? j(g, a) : (g.attr({width: 0, height: 0}), Aa("img", {onload: function () {
        j(g, Fc[k] = [this.width, this.height])
      }, src: k}))
    }
    return g
  }, symbols: {circle: function (a, b, c, d) {
    var e = 0.166 * c;
    return[wa, a + c / 2,
      b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
  }, square: function (a, b, c, d) {
    return[wa, a, b, fa, a + c, b, a + c, b + d, a, b + d, "Z"]
  }, triangle: function (a, b, c, d) {
    return[wa, a + c / 2, b, fa, a + c, b + d, a, b + d, "Z"]
  }, "triangle-down": function (a, b, c, d) {
    return[wa, a, b, fa, a + c, b, a + c / 2, b + d, "Z"]
  }, diamond: function (a, b, c, d) {
    return[wa, a + c / 2, b, fa, a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
  }, arc: function (a, b, c, d, e) {
    var f = e.start, c = e.r || c || d, g = e.end - 1.0E-6, d = e.innerR, h = ja(f), i = C(f), k = ja(g), g = C(g), e = e.end - f < da ? 0 : 1;
    return[wa, a + c * h, b + c * i,
      "A", c, c, 0, e, 1, a + c * k, b + c * g, fa, a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * h, b + d * i, "Z"]
  }}, clipRect: function (a, b, c, d) {
    var e = Ia + lc++, f = this.createElement("clipPath").attr({id: e}).add(this.defs), a = this.rect(a, b, c, d, 0).add(f);
    a.id = e;
    a.clipPath = f;
    return a
  }, color: function (a, b, c) {
    var d, e = /^rgba/;
    if (a && a.linearGradient) {
      var f = this, g = a.linearGradient, b = !Fb(g), c = f.gradients, h, i = g.x1 || g[0] || 0, k = g.y1 || g[1] || 0, j = g.x2 || g[2] || 0, l = g.y2 || g[3] || 0, n, t, r = [b, i, k, j, l, a.stops.join(",")].join(",");
      c[r] ? g = A(c[r].element, "id") : (g = Ia + lc++,
        h = f.createElement("linearGradient").attr(L({id: g, x1: i, y1: k, x2: j, y2: l}, b ? null : {gradientUnits: "userSpaceOnUse"})).add(f.defs), h.stops = [], o(a.stops, function (a) {
        e.test(a[1]) ? (d = ma(a[1]), n = d.get("rgb"), t = d.get("a")) : (n = a[1], t = 1);
        a = f.createElement("stop").attr({offset: a[0], "stop-color": n, "stop-opacity": t}).add(h);
        h.stops.push(a)
      }), c[r] = h);
      return"url(" + this.url + "#" + g + ")"
    } else return e.test(a) ? (d = ma(a), A(b, c + "-opacity", d.get("a")), d.get("rgb")) : (b.removeAttribute(c + "-opacity"), a)
  }, text: function (a, b, c, d) {
    var e =
      Ea.chart.style;
    if (d && !this.forExport)return this.html(a, b, c);
    b = z(p(b, 0));
    c = z(p(c, 0));
    a = this.createElement("text").attr({x: b, y: c, text: a}).css({fontFamily: e.fontFamily, fontSize: e.fontSize});
    a.x = b;
    a.y = c;
    return a
  }, html: function (a, b, c) {
    var d = Ea.chart.style, e = this.createElement("span"), f = e.attrSetters, g = e.element, h = e.renderer;
    f.text = function (a) {
      g.innerHTML = a;
      return!1
    };
    f.x = f.y = f.align = function (a, b) {
      b === "align" && (b = "textAlign");
      e[b] = a;
      e.htmlUpdateTransform();
      return!1
    };
    e.attr({text: a, x: z(b), y: z(c)}).css({position: wb,
      whiteSpace: "nowrap", fontFamily: d.fontFamily, fontSize: d.fontSize});
    e.css = e.htmlCss;
    if (h.isSVG)e.add = function (a) {
      var b, c, d = h.box.parentNode;
      if (a) {
        if (b = a.div, !b)b = a.div = Aa(Ra, {className: A(a.element, "class")}, {position: wb, left: a.attr("translateX") + ga, top: a.attr("translateY") + ga}, d), c = b.style, L(a.attrSetters, {translateX: function (a) {
          c.left = a + ga
        }, translateY: function (a) {
          c.top = a + ga
        }, visibility: function (a, b) {
          c[b] = a
        }})
      } else b = d;
      b.appendChild(g);
      e.added = !0;
      e.alignOnAdd && e.htmlUpdateTransform();
      return e
    };
    return e
  },
    fontMetrics: function (a) {
      var a = S(a || 11), a = a < 24 ? a + 4 : z(a * 1.2), b = z(a * 0.8);
      return{h: a, b: b}
    }, label: function (a, b, c, d, e, f, g, h) {
      function i() {
        var a = n.styles, a = a && a.textAlign, b = v, c;
        c = h ? 0 : ia;
        if (s(y) && (a === "center" || a === "right"))b += {center: 0.5, right: 1}[a] * (y - p.width);
        (b !== t.x || c !== t.y) && t.attr({x: b, y: c});
        t.x = b;
        t.y = c
      }

      function k(a, b) {
        r ? r.attr(a, b) : x[a] = b
      }

      function j() {
        n.attr({text: a, x: b, y: c, anchorX: e, anchorY: f})
      }

      var l = this, n = l.g(), t = l.text("", 0, 0, g).attr({zIndex: 1}).add(n), r, p, V = "left", v = 3, y, q, T, A, w = 0, x = {}, ia, g =
        n.attrSetters;
      ha(n, "add", j);
      g.width = function (a) {
        y = a;
        return!1
      };
      g.height = function (a) {
        q = a;
        return!1
      };
      g.padding = function (a) {
        s(a) && a !== v && (v = a, i());
        return!1
      };
      g.align = function (a) {
        V = a;
        return!1
      };
      g.text = function (a, b) {
        t.attr(b, a);
        var c;
        c = t.element.style;
        p = (y === void 0 || q === void 0 || n.styles.textAlign) && t.getBBox(!0);
        n.width = (y || p.width) + 2 * v;
        n.height = (q || p.height) + 2 * v;
        ia = v + l.fontMetrics(c && c.fontSize).b;
        if (!r)c = h ? -ia : 0, n.box = r = d ? l.symbol(d, 0, c, n.width, n.height) : l.rect(0, c, n.width, n.height, 0, x["stroke-width"]),
          r.add(n);
        r.attr(K({width: n.width, height: n.height}, x));
        x = null;
        i();
        return!1
      };
      g["stroke-width"] = function (a, b) {
        w = a % 2 / 2;
        k(b, a);
        return!1
      };
      g.stroke = g.fill = g.r = function (a, b) {
        k(b, a);
        return!1
      };
      g.anchorX = function (a, b) {
        e = a;
        k(b, a + w - T);
        return!1
      };
      g.anchorY = function (a, b) {
        f = a;
        k(b, a - A);
        return!1
      };
      g.x = function (a) {
        a -= {left: 0, center: 0.5, right: 1}[V] * ((y || p.width) + v);
        T = n.x = z(a);
        n.attr("translateX", T);
        return!1
      };
      g.y = function (a) {
        A = n.y = z(a);
        n.attr("translateY", a);
        return!1
      };
      var ua = n.css;
      return L(n, {css: function (a) {
        if (a) {
          var b =
          {}, a = K({}, a);
          o("fontSize,fontWeight,fontFamily,color,lineHeight,width".split(","), function (c) {
            a[c] !== X && (b[c] = a[c], delete a[c])
          });
          t.css(b)
        }
        return ua.call(n, a)
      }, getBBox: function () {
        return r.getBBox()
      }, shadow: function (a) {
        r.shadow(a);
        return n
      }, destroy: function () {
        Qa(n, "add", j);
        Qa(n.element, "mouseenter");
        Qa(n.element, "mouseleave");
        t && (t = t.destroy());
        Sa.prototype.destroy.call(n)
      }})
    }};
  Xb = Eb;
  var $a;
  if (!Pb && !Fa)$a = {init: function (a, b) {
    var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ", wb, ";"];
    (b === "shape" ||
      b === Ra) && d.push("left:0;top:0;width:10px;height:10px;");
    Xa && d.push("visibility: ", b === Ra ? ab : eb);
    c.push(' style="', d.join(""), '"/>');
    if (b)c = b === Ra || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = Aa(c);
    this.renderer = a;
    this.attrSetters = {}
  }, add: function (a) {
    var b = this.renderer, c = this.element, d = b.box, d = a ? a.element || a : d;
    a && a.inverted && b.invertChild(c, d);
    Xa && d.gVis === ab && P(c, {visibility: ab});
    d.appendChild(c);
    this.added = !0;
    this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
    aa(this,
      "add");
    return this
  }, toggleChildren: function (a, b) {
    for (var c = a.childNodes, d = c.length; d--;)P(c[d], {visibility: b}), c[d].nodeName === "DIV" && this.toggleChildren(c[d], b)
  }, updateTransform: Sa.prototype.htmlUpdateTransform, attr: function (a, b) {
    var c, d, e, f = this.element || {}, g = f.style, h = f.nodeName, i = this.renderer, k = this.symbolName, j, l = this.shadows, n, o = this.attrSetters, r = this;
    Ab(a) && s(b) && (c = a, a = {}, a[c] = b);
    if (Ab(a))c = a, r = c === "strokeWidth" || c === "stroke-width" ? this.strokeweight : this[c]; else for (c in a)if (d = a[c], n = !1,
      e = o[c] && o[c](d, c), e !== !1 && d !== null) {
      e !== X && (d = e);
      if (k && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c))j || (this.symbolAttr(a), j = !0), n = !0; else if (c === "d") {
        d = d || [];
        this.d = d.join(" ");
        e = d.length;
        for (n = []; e--;)n[e] = Bb(d[e]) ? z(d[e] * 10) - 5 : d[e] === "Z" ? "x" : d[e];
        d = n.join(" ") || "x";
        f.path = d;
        if (l)for (e = l.length; e--;)l[e].path = d;
        n = !0
      } else if (c === "zIndex" || c === "visibility") {
        if (Xa && c === "visibility" && h === "DIV")f.gVis = d, this.toggleChildren(f, d), d === eb && (d = null);
        d && (g[c] = d);
        n = !0
      } else if (c === "width" ||
        c === "height")d = W(0, d), this[c] = d, this.updateClipping ? (this[c] = d, this.updateClipping()) : g[c] = d, n = !0; else if (c === "x" || c === "y")this[c] = d, g[{x: "left", y: "top"}[c]] = d; else if (c === "class")f.className = d; else if (c === "stroke")d = i.color(d, f, c), c = "strokecolor"; else if (c === "stroke-width" || c === "strokeWidth")f.stroked = d ? !0 : !1, c = "strokeweight", this[c] = d, Bb(d) && (d += ga); else if (c === "dashstyle")(f.getElementsByTagName("stroke")[0] || Aa(i.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid", this.dashstyle = d, n = !0; else if (c ===
        "fill")h === "SPAN" ? g.color = d : (f.filled = d !== Ma ? !0 : !1, d = i.color(d, f, c), c = "fillcolor"); else if (c === "translateX" || c === "translateY" || c === "rotation")this[c] = d, this.updateTransform(), n = !0; else if (c === "text")this.bBox = null, f.innerHTML = d, n = !0;
      if (l && c === "visibility")for (e = l.length; e--;)l[e].style[c] = d;
      n || (Xa ? f[c] = d : A(f, c, d))
    }
    return r
  }, clip: function (a) {
    var b = this, c = a.members;
    c.push(b);
    b.destroyClip = function () {
      Gb(c, b)
    };
    return b.css(a.getCSS(b.inverted))
  }, css: Sa.prototype.htmlCss, safeRemoveChild: function (a) {
    a.parentNode &&
    Tb(a)
  }, destroy: function () {
    this.destroyClip && this.destroyClip();
    return Sa.prototype.destroy.apply(this)
  }, empty: function () {
    for (var a = this.element.childNodes, b = a.length, c; b--;)c = a[b], c.parentNode.removeChild(c)
  }, on: function (a, b) {
    this.element["on" + a] = function () {
      var a = ca.event;
      a.target = a.srcElement;
      b(a)
    };
    return this
  }, shadow: function (a, b) {
    var c = [], d, e = this.element, f = this.renderer, g, h = e.style, i, k = e.path;
    k && typeof k.value !== "string" && (k = "x");
    if (a) {
      for (d = 1; d <= 3; d++)i = ['<shape isShadow="true" strokeweight="',
        7 - 2 * d, '" filled="false" path="', k, '" coordsize="100,100" style="', e.style.cssText, '" />'], g = Aa(f.prepVML(i), null, {left: S(h.left) + 1, top: S(h.top) + 1}), i = ['<stroke color="black" opacity="', 0.05 * d, '"/>'], Aa(f.prepVML(i), null, null, g), b ? b.element.appendChild(g) : e.parentNode.insertBefore(g, e), c.push(g);
      this.shadows = c
    }
    return this
  }}, $a = pa(Sa, $a), w = {Element: $a, isIE8: kb.indexOf("MSIE 8.0") > -1, init: function (a, b, c) {
    var d, e;
    this.alignedObjects = [];
    d = this.createElement(Ra);
    e = d.element;
    e.style.position = mc;
    a.appendChild(d.element);
    this.box = e;
    this.boxWrapper = d;
    this.setSize(b, c, !1);
    if (!x.namespaces.hcv)x.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), x.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
  }, clipRect: function (a, b, c, d) {
    var e = this.createElement();
    return L(e, {members: [], left: a, top: b, width: c, height: d, getCSS: function (a) {
      var b = this.top, c = this.left, d = c + this.width, e = b + this.height, b = {clip: "rect(" + z(a ? c : b) + "px," + z(a ? e : d) + "px," + z(a ? d : e) +
        "px," + z(a ? b : c) + "px)"};
      !a && Xa && L(b, {width: d + ga, height: e + ga});
      return b
    }, updateClipping: function () {
      o(e.members, function (a) {
        a.css(e.getCSS(a.inverted))
      })
    }})
  }, color: function (a, b, c) {
    var d, e = /^rgba/;
    if (a && a.linearGradient) {
      var f, g, h = a.linearGradient, i = h.x1 || h[0] || 0, k = h.y1 || h[1] || 0, j = h.x2 || h[2] || 0, h = h.y2 || h[3] || 0, l, n, p, r;
      o(a.stops, function (a, b) {
        e.test(a[1]) ? (d = ma(a[1]), f = d.get("rgb"), g = d.get("a")) : (f = a[1], g = 1);
        b ? (p = f, r = g) : (l = f, n = g)
      });
      if (c === "fill")a = 90 - oa.atan((h - k) / (j - i)) * 180 / da, a = ['<fill colors="0% ', l,
        ",100% ", p, '" angle="', a, '" opacity="', r, '" o:opacity2="', n, '" type="gradient" focus="100%" method="sigma" />'], Aa(this.prepVML(a), null, null, b); else return f
    } else if (e.test(a) && b.tagName !== "IMG")return d = ma(a), a = ["<", c, ' opacity="', d.get("a"), '"/>'], Aa(this.prepVML(a), null, null, b), d.get("rgb"); else {
      b = b.getElementsByTagName(c);
      if (b.length)b[0].opacity = 1;
      return a
    }
  }, prepVML: function (a) {
    var b = this.isIE8, a = a.join("");
    b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
    return a
  }, text: Eb.prototype.html, path: function (a) {
    return this.createElement("shape").attr({coordsize: "100 100", d: a})
  }, circle: function (a, b, c) {
    return this.symbol("circle").attr({x: a - c, y: b - c, width: 2 * c, height: 2 * c})
  }, g: function (a) {
    var b;
    a && (b = {className: Ia + a, "class": Ia + a});
    return this.createElement(Ra).attr(b)
  }, image: function (a, b, c, d, e) {
    var f = this.createElement("img").attr({src: a});
    arguments.length > 1 && f.css({left: b, top: c, width: d, height: e});
    return f
  }, rect: function (a, b, c, d, e, f) {
    if (mb(a))b = a.y, c = a.width, d = a.height, f = a.strokeWidth, a = a.x;
    var g = this.symbol("rect");
    g.r = e;
    return g.attr(g.crisp(f, a, b, W(c, 0), W(d, 0)))
  }, invertChild: function (a, b) {
    var c = b.style;
    P(a, {flip: "x", left: S(c.width) - 10, top: S(c.height) - 10, rotation: -90})
  }, symbols: {arc: function (a, b, c, d, e) {
    var f = e.start, g = e.end, c = e.r || c || d, d = ja(f), h = C(f), i = ja(g), k = C(g), e = e.innerR,
      j = 0.08 / c, l = e && 0.25 / e || 0;
    if (g - f === 0)return["x"]; else 2 * da - g + f < j ? i = -j : g - f < l && (i = ja(f + l));
    return["wa", a - c, b - c, a + c, b + c, a + c * d, b + c * h, a + c * i, b + c * k, "at", a - e, b - e, a + e, b + e, a + e * i, b + e * k, a + e * d, b + e * h, "x", "e"]
  }, circle: function (a, b, c, d) {
    return["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
  }, rect: function (a, b, c, d, e) {
    if (!s(e))return[];
    var f = a + c, g = b + d, c = Ua(e.r || 0, c, d);
    return[wa, a + c, b, fa, f - c, b, "wa", f - 2 * c, b, f, b + 2 * c, f - c, b, f, b + c, fa, f, g - c, "wa", f - 2 * c, g - 2 * c, f, g, f, g - c, f - c, g, fa, a + c, g, "wa", a, g - 2 * c, a + 2 * c, g, a + c, g, a, g - c, fa, a, b + c, "wa",
      a, b, a + 2 * c, b + 2 * c, a, b + c, a + c, b, "x", "e"]
  }}}, $a = function () {
    this.init.apply(this, arguments)
  }, $a.prototype = K(Eb.prototype, w), Xb = $a;
  var oc, Cc;
  Fa && (oc = function () {
  }, Cc = function () {
    function a() {
      var a = b.length, d;
      for (d = 0; d < a; d++)b[d]();
      b = []
    }

    var b = [];
    return{push: function (c, d) {
      b.length === 0 && Hc(d, a);
      b.push(c)
    }}
  }());
  Xb = $a || oc || Eb;
  wc.prototype.callbacks = [];
  var lb = function () {
  };
  lb.prototype = {init: function (a, b, c) {
    var d = a.chart.counters;
    this.series = a;
    this.applyOptions(b, c);
    this.pointAttr = {};
    if (a.options.colorByPoint) {
      b =
        a.chart.options.colors;
      if (!this.options)this.options = {};
      this.color = this.options.color = this.color || b[d.color++];
      d.wrapColor(b.length)
    }
    a.chart.pointCount++;
    return this
  }, applyOptions: function (a, b) {
    var c = this.series, d = typeof a;
    this.config = a;
    if (d === "number" || a === null)this.y = a; else if (typeof a[0] === "number")this.x = a[0], this.y = a[1]; else if (d === "object" && typeof a.length !== "number") {
      if (L(this, a), this.options = a, a.dataLabels)c._hasPointLabels = !0
    } else if (typeof a[0] === "string")this.name = a[0], this.y = a[1];
    if (this.x ===
      X)this.x = b === X ? c.autoIncrement() : b
  }, destroy: function () {
    var a = this.series, b = a.chart.hoverPoints, c;
    a.chart.pointCount--;
    b && (this.setState(), Gb(b, this));
    if (this === a.chart.hoverPoint)this.onMouseOut();
    a.chart.hoverPoints = null;
    if (this.graphic || this.dataLabel)Qa(this), this.destroyElements();
    this.legendItem && this.series.chart.legend.destroyItem(this);
    for (c in this)this[c] = null
  }, destroyElements: function () {
    for (var a = "graphic,tracker,dataLabel,group,connector,shadowGroup".split(","), b, c = 6; c--;)b = a[c], this[b] &&
      (this[b] = this[b].destroy())
  }, getLabelConfig: function () {
    return{x: this.category, y: this.y, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal}
  }, select: function (a, b) {
    var c = this, d = c.series.chart, a = p(a, !c.selected);
    c.firePointEvent(a ? "select" : "unselect", {accumulate: b}, function () {
      c.selected = a;
      c.setState(a && "select");
      b || o(d.getSelectedPoints(), function (a) {
        if (a.selected && a !== c)a.selected = !1, a.setState(Ka), a.firePointEvent("unselect")
      })
    })
  },
    onMouseOver: function () {
      var a = this.series, b = a.chart, c = b.tooltip, d = b.hoverPoint;
      if (d && d !== this)d.onMouseOut();
      this.firePointEvent("mouseOver");
      c && (!c.shared || a.noSharedTooltip) && c.refresh(this);
      this.setState(ta);
      b.hoverPoint = this
    }, onMouseOut: function () {
      this.firePointEvent("mouseOut");
      this.setState();
      this.series.chart.hoverPoint = null
    }, tooltipFormatter: function (a) {
      var b = this.series, c = b.tooltipOptions, d = String(this.y).split("."), d = d[1] ? d[1].length : 0, e = a.match(/\{(series|point)\.[a-zA-Z]+\}/g), f = /[{\.}]/,
        g, h, i, k;
      for (k in e)h = e[k], Ab(h) && h !== a && (i = (" " + h).split(f), g = {point: this, series: b}[i[1]], i = i[2], g = g === this && (i === "y" || i === "open" || i === "high" || i === "low" || i === "close") ? (c.valuePrefix || c.yPrefix || "") + dc(this[i], p(c.valueDecimals, c.yDecimals, d)) + (c.valueSuffix || c.ySuffix || "") : g[i], a = a.replace(h, g));
      return a
    }, update: function (a, b, c) {
      var d = this, e = d.series, f = d.graphic, g, h = e.data, i = h.length, k = e.chart, b = p(b, !0);
      d.firePointEvent("update", {options: a}, function () {
        d.applyOptions(a);
        mb(a) && (e.getAttribs(), f && f.attr(d.pointAttr[e.state]));
        for (g = 0; g < i; g++)if (h[g] === d) {
          e.xData[g] = d.x;
          e.yData[g] = d.y;
          e.options.data[g] = a;
          break
        }
        e.isDirty = !0;
        e.isDirtyData = !0;
        b && k.redraw(c)
      })
    }, remove: function (a, b) {
      var c = this, d = c.series, e = d.chart, f, g = d.data, h = g.length;
      Kb(b, e);
      a = p(a, !0);
      c.firePointEvent("remove", null, function () {
        for (f = 0; f < h; f++)if (g[f] === c) {
          g.splice(f, 1);
          d.options.data.splice(f, 1);
          d.xData.splice(f, 1);
          d.yData.splice(f, 1);
          break
        }
        c.destroy();
        d.isDirty = !0;
        d.isDirtyData = !0;
        a && e.redraw()
      })
    }, firePointEvent: function (a, b, c) {
      var d = this, e = this.series.options;
      (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
      a === "click" && e.allowPointSelect && (c = function (a) {
        d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
      });
      aa(this, a, b, c)
    }, importEvents: function () {
      if (!this.hasImportedEvents) {
        var a = K(this.series.options.point, this.options).events, b;
        this.events = a;
        for (b in a)ha(this, b, a[b]);
        this.hasImportedEvents = !0
      }
    }, setState: function (a) {
      var b = this.plotX, c = this.plotY, d = this.series, e = d.options.states, f = M[d.type].marker && d.options.marker,
        g = f && !f.enabled, h = f && f.states[a], i = h && h.enabled === !1, k = d.stateMarkerGraphic, j = d.chart, l = this.pointAttr, a = a || Ka;
      if (!(a === this.state || this.selected && a !== "select" || e[a] && e[a].enabled === !1 || a && (i || g && !h.enabled))) {
        if (this.graphic)e = f && this.graphic.symbolName && l[a].r, this.graphic.attr(K(l[a], e ? {x: b - e, y: c - e, width: 2 * e, height: 2 * e} : {})); else {
          if (a) {
            if (!k)e = f.radius, d.stateMarkerGraphic = k = j.renderer.symbol(d.symbol, -e, -e, 2 * e, 2 * e).attr(l[a]).add(d.group);
            k.translate(b, c)
          }
          if (k)k[a ? "show" : "hide"]()
        }
        this.state =
          a
      }
    }};
  var $ = function () {
  };
  $.prototype = {isCartesian: !0, type: "line", pointClass: lb, sorted: !0, pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"}, init: function (a, b) {
    var c, d;
    d = a.series.length;
    this.chart = a;
    this.options = b = this.setOptions(b);
    this.bindAxes();
    L(this, {index: d, name: b.name || "Series " + (d + 1), state: Ka, pointAttr: {}, visible: b.visible !== !1, selected: b.selected === !0});
    if (Fa)b.animation = !1;
    d = b.events;
    for (c in d)ha(this, c, d[c]);
    if (d && d.click || b.point && b.point.events &&
      b.point.events.click || b.allowPointSelect)a.runTrackerClick = !0;
    this.getColor();
    this.getSymbol();
    this.setData(b.data, !1)
  }, bindAxes: function () {
    var a = this, b = a.options, c = a.chart, d;
    a.isCartesian && o(["xAxis", "yAxis"], function (e) {
      o(c[e], function (c) {
        d = c.options;
        if (b[e] === d.index || b[e] === X && d.index === 0)c.series.push(a), a[e] = c, c.isDirty = !0
      })
    })
  }, autoIncrement: function () {
    var a = this.options, b = this.xIncrement, b = p(b, a.pointStart, 0);
    this.pointInterval = p(this.pointInterval, a.pointInterval, 1);
    this.xIncrement = b + this.pointInterval;
    return b
  }, getSegments: function () {
    var a = -1, b = [], c, d = this.points, e = d.length;
    if (e)if (this.options.connectNulls) {
      for (c = e; c--;)d[c].y === null && d.splice(c, 1);
      d.length && (b = [d])
    } else o(d, function (c, g) {
      c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
    });
    this.segments = b
  }, setOptions: function (a) {
    var b = this.chart.options, c = b.plotOptions, d = a.data;
    a.data = null;
    c = K(c[this.type], c.series, a);
    c.data = a.data = d;
    this.tooltipOptions = K(b.tooltip, c.tooltip);
    return c
  }, getColor: function () {
    var a =
      this.chart.options.colors, b = this.chart.counters;
    this.color = this.options.color || a[b.color++] || "#0000ff";
    b.wrapColor(a.length)
  }, getSymbol: function () {
    var a = this.options.marker, b = this.chart, c = b.options.symbols, b = b.counters;
    this.symbol = a.symbol || c[b.symbol++];
    if (/^url/.test(this.symbol))a.radius = 0;
    b.wrapSymbol(c.length)
  }, addPoint: function (a, b, c, d) {
    var e = this.data, f = this.graph, g = this.area, h = this.chart, i = this.xData, k = this.yData, j = f && f.shift || 0, l = this.options.data;
    Kb(d, h);
    if (f && c)f.shift = j + 1;
    if (g) {
      if (c)g.shift =
        j + 1;
      g.isArea = !0
    }
    b = p(b, !0);
    d = {series: this};
    this.pointClass.prototype.applyOptions.apply(d, [a]);
    i.push(d.x);
    k.push(this.valueCount === 4 ? [d.open, d.high, d.low, d.close] : d.y);
    l.push(a);
    c && (e[0] ? e[0].remove(!1) : (e.shift(), i.shift(), k.shift(), l.shift()));
    this.getAttribs();
    this.isDirtyData = this.isDirty = !0;
    b && h.redraw()
  }, setData: function (a, b) {
    var c = this.points, d = this.options, e = this.initialColor, f = this.chart, g = null;
    this.xIncrement = null;
    this.pointRange = this.xAxis && this.xAxis.categories && 1 || d.pointRange;
    if (s(e))f.counters.color =
      e;
    var h = [], i = [], k = a ? a.length : [], j = this.valueCount === 4;
    if (k > (d.turboThreshold || 1E3)) {
      for (e = 0; g === null && e < k;)g = a[e], e++;
      if (Bb(g)) {
        g = p(d.pointStart, 0);
        d = p(d.pointInterval, 1);
        for (e = 0; e < k; e++)h[e] = g, i[e] = a[e], g += d;
        this.xIncrement = g
      } else if (Fb(g))if (j)for (e = 0; e < k; e++)d = a[e], h[e] = d[0], i[e] = d.slice(1, 5); else for (e = 0; e < k; e++)d = a[e], h[e] = d[0], i[e] = d[1]
    } else for (e = 0; e < k; e++)d = {series: this}, this.pointClass.prototype.applyOptions.apply(d, [a[e]]), h[e] = d.x, i[e] = j ? [d.open, d.high, d.low, d.close] : d.y;
    this.data = [];
    this.options.data =
      a;
    this.xData = h;
    this.yData = i;
    for (e = c && c.length || 0; e--;)c[e] && c[e].destroy && c[e].destroy();
    this.isDirty = this.isDirtyData = f.isDirtyBox = !0;
    p(b, !0) && f.redraw(!1)
  }, remove: function (a, b) {
    var c = this, d = c.chart, a = p(a, !0);
    if (!c.isRemoving)c.isRemoving = !0, aa(c, "remove", null, function () {
      c.destroy();
      d.isDirtyLegend = d.isDirtyBox = !0;
      a && d.redraw(b)
    });
    c.isRemoving = !1
  }, processData: function (a) {
    var b = this.xData, c = this.yData, d = b.length, e = 0, f = d, g, h, i = this.xAxis, k = this.options, j = k.cropThreshold, l = this.isCartesian;
    if (l && !this.isDirty && !i.isDirty && !this.yAxis.isDirty && !a)return!1;
    if (l && this.sorted && (!j || d > j || this.forceCrop))if (a = i.getExtremes(), i = a.min, j = a.max, b[d - 1] < i || b[0] > j)b = [], c = []; else if (b[0] < i || b[d - 1] > j) {
      for (a = 0; a < d; a++)if (b[a] >= i) {
        e = W(0, a - 1);
        break
      }
      for (; a < d; a++)if (b[a] > j) {
        f = a + 1;
        break
      }
      b = b.slice(e, f);
      c = c.slice(e, f);
      g = !0
    }
    for (a = b.length - 1; a > 0; a--)if (d = b[a] - b[a - 1], d > 0 && (h === X || d < h))h = d;
    this.cropped = g;
    this.cropStart = e;
    this.processedXData = b;
    this.processedYData = c;
    if (k.pointRange === null)this.pointRange = h || 1;
    this.closestPointRange =
      h
  }, generatePoints: function () {
    var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, i, k = this.hasGroupedData, j, l = [], n;
    if (!b && !k)b = [], b.length = a.length, b = this.data = b;
    for (n = 0; n < g; n++)i = h + n, k ? l[n] = (new f).init(this, [d[n]].concat(Hb(e[n]))) : (b[i] ? j = b[i] : b[i] = j = (new f).init(this, a[i], d[n]), l[n] = j);
    if (b && (g !== (c = b.length) || k))for (n = 0; n < c; n++)n === h && !k && (n += g), b[n] && b[n].destroyElements();
    this.data = b;
    this.points = l
  }, translate: function () {
    this.processedXData ||
    this.processData();
    this.generatePoints();
    for (var a = this.chart, b = this.options, c = b.stacking, d = this.xAxis, e = d.categories, f = this.yAxis, g = this.points, h = g.length, i = !!this.modifyValue, k, j = f.series, l = j.length; l--;)if (j[l].visible) {
      l === this.index && (k = !0);
      break
    }
    for (l = 0; l < h; l++) {
      var j = g[l], n = j.x, o = j.y, r = j.low, p = f.stacks[(o < b.threshold ? "-" : "") + this.stackKey];
      j.plotX = z(d.translate(n, 0, 0, 0, 1) * 10) / 10;
      if (c && this.visible && p && p[n]) {
        r = p[n];
        n = r.total;
        r.cum = r = r.cum - o;
        o = r + o;
        if (k)r = b.threshold;
        c === "percent" && (r = n ? r * 100 /
          n : 0, o = n ? o * 100 / n : 0);
        j.percentage = n ? j.y * 100 / n : 0;
        j.stackTotal = n;
        j.stackY = o
      }
      j.yBottom = s(r) ? f.translate(r, 0, 1, 0, 1) : null;
      i && (o = this.modifyValue(o, j));
      j.plotY = typeof o === "number" ? z(f.translate(o, 0, 1, 0, 1) * 10) / 10 : X;
      j.clientX = a.inverted ? a.plotHeight - j.plotX : j.plotX;
      j.category = e && e[j.x] !== X ? e[j.x] : j.x
    }
    this.getSegments()
  }, setTooltipPoints: function (a) {
    var b = this.chart, c = b.inverted, d = [], b = z((c ? b.plotTop : b.plotLeft) + b.plotSizeX), e, f;
    e = this.xAxis;
    var g, h, i = [];
    if (this.options.enableMouseTracking !== !1) {
      if (a)this.tooltipPoints =
        null;
      o(this.segments || this.points, function (a) {
        d = d.concat(a)
      });
      e && e.reversed && (d = d.reverse());
      a = d.length;
      for (h = 0; h < a; h++) {
        g = d[h];
        e = d[h - 1] ? d[h - 1]._high + 1 : 0;
        for (f = g._high = d[h + 1] ? Ta((g.plotX + (d[h + 1] ? d[h + 1].plotX : b)) / 2) : b; e <= f;)i[c ? b - e++ : e++] = g
      }
      this.tooltipPoints = i
    }
  }, tooltipHeaderFormatter: function (a) {
    var b = this.tooltipOptions, c = b.xDateFormat || "%A, %b %e, %Y", d = this.xAxis;
    return b.headerFormat.replace("{point.key}", d && d.options.type === "datetime" ? ac(c, a) : a).replace("{series.name}", this.name).replace("{series.color}",
      this.color)
  }, onMouseOver: function () {
    var a = this.chart, b = a.hoverSeries;
    if (Ga || !a.mouseIsDown) {
      if (b && b !== this)b.onMouseOut();
      this.options.events.mouseOver && aa(this, "mouseOver");
      this.setState(ta);
      a.hoverSeries = this
    }
  }, onMouseOut: function () {
    var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
    if (d)d.onMouseOut();
    this && a.events.mouseOut && aa(this, "mouseOut");
    c && !a.stickyTracking && !c.shared && c.hide();
    this.setState();
    b.hoverSeries = null
  }, animate: function (a) {
    var b = this.chart, c = this.clipRect, d = this.options.animation;
    d && !mb(d) && (d = {});
    if (a) {
      if (!c.isAnimating)c.attr("width", 0), c.isAnimating = !0
    } else c.animate({width: b.plotSizeX}, d), this.animate = null
  }, drawPoints: function () {
    var a, b = this.points, c = this.chart, d, e, f, g, h, i, k, j;
    if (this.options.marker.enabled)for (f = b.length; f--;)if (g = b[f], d = g.plotX, e = g.plotY, j = g.graphic, e !== X && !isNaN(e))if (a = g.pointAttr[g.selected ? "select" : Ka], h = a.r, i = p(g.marker && g.marker.symbol, this.symbol), k = i.indexOf("url") === 0, j)j.animate(L({x: d - h, y: e - h}, j.symbolName ? {width: 2 * h, height: 2 * h} : {})); else if (h >
      0 || k)g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h).attr(a).add(this.group)
  }, convertAttribs: function (a, b, c, d) {
    var e = this.pointAttrToOptions, f, g, h = {}, a = a || {}, b = b || {}, c = c || {}, d = d || {};
    for (f in e)g = e[f], h[f] = p(a[g], b[f], c[f], d[f]);
    return h
  }, getAttribs: function () {
    var a = this, b = M[a.type].marker ? a.options.marker : a.options, c = b.states, d = c[ta], e, f = a.color, g = {stroke: f, fill: f}, h = a.points, i = [], k, j = a.pointAttrToOptions, l;
    a.options.marker ? (d.radius = d.radius || b.radius + 2, d.lineWidth = d.lineWidth || b.lineWidth + 1) : d.color =
      d.color || ma(d.color || f).brighten(d.brightness).get();
    i[Ka] = a.convertAttribs(b, g);
    o([ta, "select"], function (b) {
      i[b] = a.convertAttribs(c[b], i[Ka])
    });
    a.pointAttr = i;
    for (f = h.length; f--;) {
      g = h[f];
      if ((b = g.options && g.options.marker || g.options) && b.enabled === !1)b.radius = 0;
      e = !1;
      if (g.options)for (l in j)s(b[j[l]]) && (e = !0);
      if (e) {
        k = [];
        c = b.states || {};
        e = c[ta] = c[ta] || {};
        if (!a.options.marker)e.color = ma(e.color || g.options.color).brighten(e.brightness || d.brightness).get();
        k[Ka] = a.convertAttribs(b, i[Ka]);
        k[ta] = a.convertAttribs(c[ta],
          i[ta], k[Ka]);
        k.select = a.convertAttribs(c.select, i.select, k[Ka])
      } else k = i;
      g.pointAttr = k
    }
  }, destroy: function () {
    var a = this, b = a.chart, c = a.clipRect, d = /AppleWebKit\/533/.test(kb), e, f, g = a.data || [], h, i, k;
    aa(a, "destroy");
    Qa(a);
    o(["xAxis", "yAxis"], function (b) {
      if (k = a[b])Gb(k.series, a), k.isDirty = !0
    });
    a.legendItem && a.chart.legend.destroyItem(a);
    for (f = g.length; f--;)(h = g[f]) && h.destroy && h.destroy();
    a.points = null;
    if (c && c !== b.clipRect)a.clipRect = c.destroy();
    o(["area", "graph", "dataLabelsGroup", "group", "tracker"], function (b) {
      a[b] &&
      (e = d && b === "group" ? "hide" : "destroy", a[b][e]())
    });
    if (b.hoverSeries === a)b.hoverSeries = null;
    Gb(b.series, a);
    for (i in a)delete a[i]
  }, drawDataLabels: function () {
    var a = this, b = a.options, c = b.dataLabels;
    if (c.enabled || a._hasPointLabels) {
      var d, e, f = a.points, g, h, i, k = a.dataLabelsGroup, j = a.chart, l = a.xAxis, l = l ? l.left : j.plotLeft, n = a.yAxis, n = n ? n.top : j.plotTop, t = j.renderer, r = j.inverted, Z = a.type, V = b.stacking, v = Z === "column" || Z === "bar", y = c.verticalAlign === null, q = c.y === null, T = t.fontMetrics(c.style.fontSize), A = T.h, x = T.b, w,
        ia;
      v && (T = {top: x, middle: x - A / 2, bottom: -A + x}, V ? (y && (c = K(c, {verticalAlign: "middle"})), q && (c = K(c, {y: T[c.verticalAlign]}))) : y ? c = K(c, {verticalAlign: "top"}) : q && (c = K(c, {y: T[c.verticalAlign]})));
      k ? k.translate(l, n) : k = a.dataLabelsGroup = t.g("data-labels").attr({visibility: a.visible ? eb : ab, zIndex: 6}).translate(l, n).add();
      h = c;
      o(f, function (f) {
        w = f.dataLabel;
        c = h;
        (g = f.options) && g.dataLabels && (c = K(c, g.dataLabels));
        if (ia = c.enabled) {
          var l = f.barX && f.barX + f.barW / 2 || p(f.plotX, -999), n = p(f.plotY, -999), o = c.y === null ? f.y >= b.threshold ?
            -A + x : x : c.y;
          d = (r ? j.plotWidth - n : l) + c.x;
          e = z((r ? j.plotHeight - l : n) + o)
        }
        if (w && a.isCartesian && (!j.isInsidePlot(d, e) || !ia))f.dataLabel = w.destroy(); else if (ia) {
          l = c.align;
          i = c.formatter.call(f.getLabelConfig(), c);
          Z === "column" && (d += {left: -1, right: 1}[l] * f.barW / 2 || 0);
          !V && r && f.y < 0 && (l = "right", d -= 10);
          c.style.color = p(c.color, c.style.color, a.color, "black");
          if (w)w.attr({text: i}).animate({x: d, y: e}); else if (s(i))w = f.dataLabel = t[c.rotation ? "text" : "label"](i, d, e, null, null, null, c.useHTML, !0).attr({align: l, fill: c.backgroundColor,
            stroke: c.borderColor, "stroke-width": c.borderWidth, r: c.borderRadius, rotation: c.rotation, padding: c.padding, zIndex: 1}).css(c.style).add(k).shadow(c.shadow);
          if (v && b.stacking && w)l = f.barX, n = f.barY, o = f.barW, f = f.barH, w.align(c, null, {x: r ? j.plotWidth - n - f : l, y: r ? j.plotHeight - l - o : n, width: r ? f : o, height: r ? o : f})
        }
      })
    }
  }, drawGraph: function () {
    var a = this, b = a.options, c = a.graph, d = [], e, f = a.area, g = a.group, h = b.lineColor || a.color, i = b.lineWidth, k = b.dashStyle, j, l = a.chart.renderer, n = a.yAxis.getThreshold(b.threshold), t = /^area/.test(a.type),
      r = [], s = [];
    o(a.segments, function (c) {
      j = [];
      o(c, function (d, e) {
        a.getPointSpline ? j.push.apply(j, a.getPointSpline(c, d, e)) : (j.push(e ? fa : wa), e && b.step && j.push(d.plotX, c[e - 1].plotY), j.push(d.plotX, d.plotY))
      });
      c.length > 1 ? d = d.concat(j) : r.push(c[0]);
      if (t) {
        var e = [], f, g = j.length;
        for (f = 0; f < g; f++)e.push(j[f]);
        g === 3 && e.push(fa, j[1], j[2]);
        if (b.stacking && a.type !== "areaspline")for (f = c.length - 1; f >= 0; f--)f < c.length - 1 && b.step && e.push(c[f + 1].plotX, c[f].yBottom), e.push(c[f].plotX, c[f].yBottom); else e.push(fa, c[c.length - 1].plotX,
          n, fa, c[0].plotX, n);
        s = s.concat(e)
      }
    });
    a.graphPath = d;
    a.singlePoints = r;
    if (t)e = p(b.fillColor, ma(a.color).setOpacity(b.fillOpacity || 0.75).get()), f ? f.animate({d: s}) : a.area = a.chart.renderer.path(s).attr({fill: e}).add(g);
    if (c)Ob(c), c.animate({d: d}); else if (i) {
      c = {stroke: h, "stroke-width": i};
      if (k)c.dashstyle = k;
      a.graph = l.path(d).attr(c).add(g).shadow(b.shadow)
    }
  }, invertGroups: function () {
    function a() {
      var a = {width: b.yAxis.len, height: b.xAxis.len};
      c.attr(a).invert();
      d && d.attr(a).invert()
    }

    var b = this, c = b.group, d = b.trackerGroup,
      e = b.chart;
    ha(e, "resize", a);
    ha(b, "destroy", function () {
      Qa(e, "resize", a)
    });
    a();
    b.invertGroups = a
  }, render: function () {
    var a = this, b = a.chart, c, d = a.options, e = d.clip !== !1, f = d.animation, g = f && a.animate, f = g ? f && f.duration || 500 : 0, h = a.clipRect, i = b.renderer;
    if (!h && (h = a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : i.clipRect(0, 0, b.plotSizeX, b.plotSizeY + 1), !b.clipRect))b.clipRect = h;
    if (!a.group)c = a.group = i.g("series"), c.attr({visibility: a.visible ? eb : ab, zIndex: d.zIndex}).translate(a.xAxis.left, a.yAxis.top).add(b.seriesGroup);
    a.drawDataLabels();
    g && a.animate(!0);
    a.getAttribs();
    a.drawGraph && a.drawGraph();
    a.drawPoints();
    a.options.enableMouseTracking !== !1 && a.drawTracker();
    b.inverted && a.invertGroups();
    e && !a.hasRendered && (c.clip(h), a.trackerGroup && a.trackerGroup.clip(b.clipRect));
    g && a.animate();
    setTimeout(function () {
      h.isAnimating = !1;
      if ((c = a.group) && h !== b.clipRect && h.renderer) {
        if (e)c.clip(a.clipRect = b.clipRect);
        h.destroy()
      }
    }, f);
    a.isDirty = a.isDirtyData = !1;
    a.hasRendered = !0
  }, redraw: function () {
    var a = this.chart, b = this.isDirtyData,
      c = this.group;
    c && (a.inverted && c.attr({width: a.plotWidth, height: a.plotHeight}), c.animate({translateX: this.xAxis.left, translateY: this.yAxis.top}));
    this.translate();
    this.setTooltipPoints(!0);
    this.render();
    b && aa(this, "updatedData")
  }, setState: function (a) {
    var b = this.options, c = this.graph, d = b.states, b = b.lineWidth, a = a || Ka;
    if (this.state !== a)this.state = a, d[a] && d[a].enabled === !1 || (a && (b = d[a].lineWidth || b + 1), c && !c.dashstyle && c.attr({"stroke-width": b}, a ? 0 : 500))
  }, setVisible: function (a, b) {
    var c = this.chart, d = this.legendItem,
      e = this.group, f = this.tracker, g = this.dataLabelsGroup, h, i = this.points, k = c.options.chart.ignoreHiddenSeries;
    h = this.visible;
    h = (this.visible = a = a === X ? !h : a) ? "show" : "hide";
    if (e)e[h]();
    if (f)f[h](); else if (i)for (e = i.length; e--;)if (f = i[e], f.tracker)f.tracker[h]();
    if (g)g[h]();
    d && c.legend.colorizeItem(this, a);
    this.isDirty = !0;
    this.options.stacking && o(c.series, function (a) {
      if (a.options.stacking && a.visible)a.isDirty = !0
    });
    if (k)c.isDirtyBox = !0;
    b !== !1 && c.redraw();
    aa(this, h)
  }, show: function () {
    this.setVisible(!0)
  }, hide: function () {
    this.setVisible(!1)
  },
    select: function (a) {
      this.selected = a = a === X ? !this.selected : a;
      if (this.checkbox)this.checkbox.checked = a;
      aa(this, a ? "select" : "unselect")
    }, drawTrackerGroup: function () {
      var a = this.trackerGroup, b = this.chart;
      if (this.isCartesian) {
        if (!a)this.trackerGroup = a = b.renderer.g().attr({zIndex: this.options.zIndex || 1}).add(b.trackerGroup);
        a.translate(this.xAxis.left, this.yAxis.top)
      }
      return a
    }, drawTracker: function () {
      var a = this, b = a.options, c = [].concat(a.graphPath), d = c.length, e = a.chart, f = e.renderer, g = e.options.tooltip.snap, h =
        a.tracker, i = b.cursor, i = i && {cursor: i}, k = a.singlePoints, j = a.drawTrackerGroup(), l;
      if (d)for (l = d + 1; l--;)c[l] === wa && c.splice(l + 1, 0, c[l + 1] - g, c[l + 2], fa), (l && c[l] === wa || l === d) && c.splice(l, 0, fa, c[l - 2] + g, c[l - 1]);
      for (l = 0; l < k.length; l++)d = k[l], c.push(wa, d.plotX - g, d.plotY, fa, d.plotX + g, d.plotY);
      h ? h.attr({d: c}) : a.tracker = f.path(c).attr({isTracker: !0, stroke: Gc, fill: Ma, "stroke-linejoin": "bevel", "stroke-width": b.lineWidth + 2 * g, visibility: a.visible ? eb : ab}).on(Ga ? "touchstart" : "mouseover",function () {
        if (e.hoverSeries !==
          a)a.onMouseOver()
      }).on("mouseout",function () {
          if (!b.stickyTracking)a.onMouseOut()
        }).css(i).add(j)
    }};
  w = pa($);
  Ha.line = w;
  w = pa($, {type: "area"});
  Ha.area = w;
  w = pa($, {type: "spline", getPointSpline: function (a, b, c) {
    var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, i, k, j;
    if (c && c < a.length - 1) {
      a = f.plotY;
      k = g.plotX;
      var g = g.plotY, l;
      h = (1.5 * d + f.plotX) / 2.5;
      i = (1.5 * e + a) / 2.5;
      k = (1.5 * d + k) / 2.5;
      j = (1.5 * e + g) / 2.5;
      l = (j - i) * (k - d) / (k - h) + e - j;
      i += l;
      j += l;
      i > a && i > e ? (i = W(a, e), j = 2 * e - i) : i < a && i < e && (i = Ua(a, e), j = 2 * e - i);
      j > g && j > e ? (j = W(g, e), i = 2 * e - j) : j < g &&
        j < e && (j = Ua(g, e), i = 2 * e - j);
      b.rightContX = k;
      b.rightContY = j
    }
    c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = [wa, d, e];
    return b
  }});
  Ha.spline = w;
  w = pa(w, {type: "areaspline"});
  Ha.areaspline = w;
  var zb = pa($, {type: "column", tooltipOutsidePlot: !0, pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color", r: "borderRadius"}, init: function () {
    $.prototype.init.apply(this, arguments);
    var a = this, b = a.chart;
    b.hasRendered && o(b.series, function (b) {
      if (b.type ===
        a.type)b.isDirty = !0
    })
  }, translate: function () {
    var a = this, b = a.chart, c = a.options, d = c.stacking, e = c.borderWidth, f = 0, g = a.xAxis, h = g.reversed, i = {}, k, j;
    $.prototype.translate.apply(a);
    o(b.series, function (b) {
      if (b.type === a.type && b.visible && a.options.group === b.options.group)b.options.stacking ? (k = b.stackKey, i[k] === X && (i[k] = f++), j = i[k]) : j = f++, b.columnIndex = j
    });
    var b = a.points, g = Ba(g.translationSlope) * (g.ordinalSlope || g.closestPointRange || 1), l = g * c.groupPadding, n = (g - 2 * l) / f, t = c.pointWidth, r = s(t) ? (n - t) / 2 : n * c.pointPadding,
      w = Yb(W(p(t, n - 2 * r), 1 + 2 * e)), x = r + (l + ((h ? f - a.columnIndex : a.columnIndex) || 0) * n - g / 2) * (h ? -1 : 1), v = a.yAxis.getThreshold(c.threshold), y = p(c.minPointLength, 5);
    o(b, function (b) {
      var f = b.plotY, g = p(b.yBottom, v), h = b.plotX + x, i = Yb(Ua(f, g)), j = Yb(W(f, g) - i), k = a.yAxis.stacks[(b.y < 0 ? "-" : "") + a.stackKey];
      d && a.visible && k && k[b.x] && k[b.x].setOffset(x, w);
      Ba(j) < y && y && (j = y, i = Ba(i - v) > y ? g - y : v - (f <= v ? y : 0));
      L(b, {barX: h, barY: i, barW: w, barH: j});
      b.shapeType = "rect";
      f = {x: h, y: i, width: w, height: j, r: c.borderRadius, strokeWidth: e};
      e % 2 && (f.y -= 1,
        f.height += 1);
      b.shapeArgs = f;
      b.trackerArgs = Ba(j) < 3 && K(b.shapeArgs, {height: 6, y: i - 3})
    })
  }, getSymbol: function () {
  }, drawGraph: function () {
  }, drawPoints: function () {
    var a = this, b = a.options, c = a.chart.renderer, d, e;
    o(a.points, function (f) {
      var g = f.plotY;
      if (g !== X && !isNaN(g) && f.y !== null)d = f.graphic, e = f.shapeArgs, d ? (Ob(d), d.animate(c.Element.prototype.crisp.apply({}, [e.strokeWidth, e.x, e.y, e.width, e.height]))) : f.graphic = d = c[f.shapeType](e).attr(f.pointAttr[f.selected ? "select" : Ka]).add(a.group).shadow(b.shadow)
    })
  }, drawTracker: function () {
    var a =
      this, b = a.chart, c = b.renderer, d, e, f = +new Date, g = a.options, h = g.cursor, i = h && {cursor: h}, k = a.drawTrackerGroup(), j;
    o(a.points, function (h) {
      e = h.tracker;
      d = h.trackerArgs || h.shapeArgs;
      delete d.strokeWidth;
      if (h.y !== null)e ? e.attr(d) : h.tracker = c[h.shapeType](d).attr({isTracker: f, fill: Gc, visibility: a.visible ? eb : ab}).on(Ga ? "touchstart" : "mouseover",function (c) {
        j = c.relatedTarget || c.fromElement;
        if (b.hoverSeries !== a && A(j, "isTracker") !== f)a.onMouseOver();
        h.onMouseOver()
      }).on("mouseout",function (b) {
          if (!g.stickyTracking &&
            (j = b.relatedTarget || b.toElement, A(j, "isTracker") !== f))a.onMouseOut()
        }).css(i).add(h.group || k)
    })
  }, animate: function (a) {
    var b = this, c = b.points, d = b.options;
    if (!a)o(c, function (a) {
      var c = a.graphic, a = a.shapeArgs, g = b.yAxis, h = d.threshold;
      c && (c.attr({height: 0, y: s(h) ? g.getThreshold(h) : g.translate(g.getExtremes().min, 0, 1, 0, 1)}), c.animate({height: a.height, y: a.y}, d.animation))
    }), b.animate = null
  }, remove: function () {
    var a = this, b = a.chart;
    b.hasRendered && o(b.series, function (b) {
      if (b.type === a.type)b.isDirty = !0
    });
    $.prototype.remove.apply(a,
      arguments)
  }});
  Ha.column = zb;
  w = pa(zb, {type: "bar", init: function () {
    this.inverted = !0;
    zb.prototype.init.apply(this, arguments)
  }});
  Ha.bar = w;
  w = pa($, {type: "scatter", sorted: !1, translate: function () {
    var a = this;
    $.prototype.translate.apply(a);
    o(a.points, function (b) {
      b.shapeType = "circle";
      b.shapeArgs = {x: b.plotX, y: b.plotY, r: a.chart.options.tooltip.snap}
    })
  }, drawTracker: function () {
    for (var a = this, b = a.options.cursor, b = b && {cursor: b}, c = a.points, d = c.length, e; d--;)if (e = c[d].graphic)e.element._i = d;
    a._hasTracking ? a._hasTracking = !0 : a.group.attr({isTracker: !0}).on(Ga ? "touchstart" : "mouseover",function (b) {
      a.onMouseOver();
      if (b.target._i !== X)c[b.target._i].onMouseOver()
    }).on("mouseout",function () {
        if (!a.options.stickyTracking)a.onMouseOut()
      }).css(b)
  }});
  Ha.scatter = w;
  w = pa(lb, {init: function () {
    lb.prototype.init.apply(this, arguments);
    var a = this, b;
    L(a, {visible: a.visible !== !1, name: p(a.name, "Slice")});
    b = function () {
      a.slice()
    };
    ha(a, "select", b);
    ha(a, "unselect", b);
    return a
  }, setVisible: function (a) {
    var b = this.series.chart, c = this.tracker, d = this.dataLabel,
      e = this.connector, f = this.shadowGroup, g;
    g = (this.visible = a = a === X ? !this.visible : a) ? "show" : "hide";
    this.group[g]();
    if (c)c[g]();
    if (d)d[g]();
    if (e)e[g]();
    if (f)f[g]();
    this.legendItem && b.legend.colorizeItem(this, a)
  }, slice: function (a, b, c) {
    var d = this.series.chart, e = this.slicedTranslation;
    Kb(c, d);
    p(b, !0);
    a = this.sliced = s(a) ? a : !this.sliced;
    a = {translateX: a ? e[0] : d.plotLeft, translateY: a ? e[1] : d.plotTop};
    this.group.animate(a);
    this.shadowGroup && this.shadowGroup.animate(a)
  }});
  w = pa($, {type: "pie", isCartesian: !1, pointClass: w,
    pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"}, getColor: function () {
      this.initialColor = this.chart.counters.color
    }, animate: function () {
      var a = this;
      o(a.points, function (b) {
        var c = b.graphic, b = b.shapeArgs, d = -da / 2;
        c && (c.attr({r: 0, start: d, end: d}), c.animate({r: b.r, start: b.start, end: b.end}, a.options.animation))
      });
      a.animate = null
    }, setData: function () {
      $.prototype.setData.apply(this, arguments);
      this.processData();
      this.generatePoints()
    }, translate: function () {
      this.generatePoints();
      var a =
        0, b = -0.25, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f = c.center.concat([c.size, c.innerSize || 0]), g = this.chart, h = g.plotWidth, i = g.plotHeight, k, j, l, n = this.points, p = 2 * da, r, s = Ua(h, i), w, v, y, q = c.dataLabels.distance, f = Vb(f, function (a, b) {
        return(w = /%$/.test(a)) ? [h, i, s, s][b] * S(a) / 100 : a
      });
      this.getX = function (a, b) {
        l = oa.asin((a - f[1]) / (f[2] / 2 + q));
        return f[0] + (b ? -1 : 1) * ja(l) * (f[2] / 2 + q)
      };
      this.center = f;
      o(n, function (b) {
        a += b.y
      });
      o(n, function (c) {
        r = a ? c.y / a : 0;
        k = z(b * p * 1E3) / 1E3;
        b += r;
        j = z(b * p * 1E3) / 1E3;
        c.shapeType = "arc";
        c.shapeArgs = {x: f[0], y: f[1], r: f[2] / 2, innerR: f[3] / 2, start: k, end: j};
        l = (j + k) / 2;
        c.slicedTranslation = Vb([ja(l) * d + g.plotLeft, C(l) * d + g.plotTop], z);
        v = ja(l) * f[2] / 2;
        y = C(l) * f[2] / 2;
        c.tooltipPos = [f[0] + v * 0.7, f[1] + y * 0.7];
        c.labelPos = [f[0] + v + ja(l) * q, f[1] + y + C(l) * q, f[0] + v + ja(l) * e, f[1] + y + C(l) * e, f[0] + v, f[1] + y, q < 0 ? "center" : l < p / 4 ? "left" : "right", l];
        c.percentage = r * 100;
        c.total = a
      });
      this.setTooltipPoints()
    }, render: function () {
      this.getAttribs();
      this.drawPoints();
      this.options.enableMouseTracking !== !1 && this.drawTracker();
      this.drawDataLabels();
      this.options.animation && this.animate && this.animate();
      this.isDirty = !1
    }, drawPoints: function () {
      var a = this.chart, b = a.renderer, c, d, e, f = this.options.shadow, g, h;
      o(this.points, function (i) {
        d = i.graphic;
        h = i.shapeArgs;
        e = i.group;
        g = i.shadowGroup;
        if (f && !g)g = i.shadowGroup = b.g("shadow").attr({zIndex: 4}).add();
        if (!e)e = i.group = b.g("point").attr({zIndex: 5}).add();
        c = i.sliced ? i.slicedTranslation : [a.plotLeft, a.plotTop];
        e.translate(c[0], c[1]);
        g && g.translate(c[0], c[1]);
        d ? d.animate(h) : i.graphic = b.arc(h).attr(L(i.pointAttr[Ka],
          {"stroke-linejoin": "round"})).add(i.group).shadow(f, g);
        i.visible === !1 && i.setVisible(!1)
      })
    }, drawDataLabels: function () {
      var a = this.data, b, c = this.chart, d = this.options.dataLabels, e = p(d.connectorPadding, 10), f = p(d.connectorWidth, 1), g, h, i = p(d.softConnector, !0), k = d.distance, j = this.center, l = j[2] / 2, j = j[1], n = k > 0, t = [
        [],
        []
      ], r, s, w, v, y = 2, q;
      if (d.enabled) {
        $.prototype.drawDataLabels.apply(this);
        o(a, function (a) {
          a.dataLabel && t[a.labelPos[7] < da / 2 ? 0 : 1].push(a)
        });
        t[1].reverse();
        v = function (a, b) {
          return b.y - a.y
        };
        for (a = t[0][0] &&
          t[0][0].dataLabel && t[0][0].dataLabel.getBBox().height; y--;) {
          var x = [], A = [], z = t[y], E = z.length, C;
          for (q = j - l - k; q <= j + l + k; q += a)x.push(q);
          w = x.length;
          if (E > w) {
            h = [].concat(z);
            h.sort(v);
            for (q = E; q--;)h[q].rank = q;
            for (q = E; q--;)z[q].rank >= w && z.splice(q, 1);
            E = z.length
          }
          for (q = 0; q < E; q++) {
            b = z[q];
            h = b.labelPos;
            b = 9999;
            for (s = 0; s < w; s++)g = Ba(x[s] - h[1]), g < b && (b = g, C = s);
            if (C < q && x[q] !== null)C = q; else for (w < E - q + C && x[q] !== null && (C = w - E + q); x[C] === null;)C++;
            A.push({i: C, y: x[C]});
            x[C] = null
          }
          A.sort(v);
          for (q = 0; q < E; q++) {
            b = z[q];
            h = b.labelPos;
            g = b.dataLabel;
            s = A.pop();
            r = h[1];
            w = b.visible === !1 ? ab : eb;
            C = s.i;
            s = s.y;
            if (r > s && x[C + 1] !== null || r < s && x[C - 1] !== null)s = r;
            r = this.getX(C === 0 || C === x.length - 1 ? r : s, y);
            g.attr({visibility: w, align: h[6]})[g.moved ? "animate" : "attr"]({x: r + d.x + ({left: e, right: -e}[h[6]] || 0), y: s + d.y});
            g.moved = !0;
            if (n && f)g = b.connector, h = i ? [wa, r + (h[6] === "left" ? 5 : -5), s, "C", r, s, 2 * h[2] - h[4], 2 * h[3] - h[5], h[2], h[3], fa, h[4], h[5]] : [wa, r + (h[6] === "left" ? 5 : -5), s, fa, h[2], h[3], fa, h[4], h[5]], g ? (g.animate({d: h}), g.attr("visibility", w)) : b.connector = g = this.chart.renderer.path(h).attr({"stroke-width": f,
              stroke: d.connectorColor || b.color || "#606060", visibility: w, zIndex: 3}).translate(c.plotLeft, c.plotTop).add()
          }
        }
      }
    }, drawTracker: zb.prototype.drawTracker, getSymbol: function () {
    }});
  Ha.pie = w;
  L(Highcharts, {Chart: wc, dateFormat: ac, pathAnim: La, getOptions: function () {
    return Ea
  }, hasBidiBug: Qc, numberFormat: dc, Point: lb, Color: ma, Renderer: Xb, SVGRenderer: Eb, VMLRenderer: $a, CanVGRenderer: oc, seriesTypes: Ha, setOptions: function (a) {
    $b = K($b, a.xAxis);
    kc = K(kc, a.yAxis);
    a.xAxis = a.yAxis = X;
    Ea = K(Ea, a);
    vc();
    return Ea
  }, Series: $, addEvent: ha,
    removeEvent: Qa, createElement: Aa, discardElement: Tb, css: P, each: o, extend: L, map: Vb, merge: K, pick: p, splat: Hb, extendClass: pa, placeBox: uc, product: "Highcharts", version: "2.2.1"})
})();
