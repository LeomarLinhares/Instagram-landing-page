o = (function (o) { 
    function n(t) { 
        var s; 
        return s = o.call(this, t) || this, s.$PhoneSlideshow2 = function () { 
            var t = s.state.activeImage + 1;
             t >= s.$PhoneSlideshow3().length && (t = 0), 
             s.setState({ lastActiveImage: s.state.activeImage, activeImage: t }) 
        }, s.state = { 
            lastActiveImage: null, activeImage: 0 
        }, s 
    } 
    i(d[1])(n, o); 
    var c = n.prototype; 
    return c.componentDidMount = function () { 
        this.$PhoneSlideshow1 = setInterval(this.$PhoneSlideshow2, 5e3) 
    }, 
    c.componentWillUnmount = function () { 
        this.$PhoneSlideshow1 && clearInterval(this.$PhoneSlideshow1) 
    }, 
    c.$PhoneSlideshow3 = function () { 
        return this.props.pixelRatio >= 1.5 ? s : t 
    }, 
    c.$PhoneSlideshow4 = function (t, s) { 
        return a(d[2]).createElement("img", {
            className: "RP4i1 " + (s === this.state.activeImage ? "JtrJi" : "") + " " + (s === this.state.lastActiveImage ? "UVauz" : ""), 
            key: 's' + s, 
            src: t, 
            alt: "" 
        }) 
    }, 
    c.render = function () { 
        return a(d[2]).createElement("div", { 
            className: i(d[3])("yOZjD", this.props.className) 
        }, 
        a(d[2]).createElement("div", { 
            className: "V64Sp" 
        }, 
        this.$PhoneSlideshow3().map(this.$PhoneSlideshow4, this))) 
    }, 
    n 
})
(a(d[2]).Component), 
    n = r(d[4]).connect(function (t) { 
        return { 
            pixelRatio: t.displayProperties.pixelRatio 
        } 
    })(o); 
    e.default = n