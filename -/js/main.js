// head {
var __nodeId__ = "plugins_fancybox3__main";
var __nodeNs__ = "plugins_fancybox3";
// }

(function (__nodeNs__, __nodeId__) {
    $.widget(__nodeNs__ + "." + __nodeId__, {
        options: {},

        _create: function () {
            this.bind();
        },

        _setOption: function (key, value) {
            $.Widget.prototype._setOption.apply(this, arguments);
        },

        bind: function () {
            var widget = this;

            var collection = $(widget.options.item_selector, widget.element);

            collection.attr("data-fancybox", widget.options.rel);

            var options = {
                afterShow: function () {
                    $(".fancybox-title").wrapInner('<div />').show();
                },

                beforeLoad: function () {
                    var el, id = $(this.element).data('title-id');

                    if (id) {
                        el = $('#' + id);

                        if (el.length) {
                            this.title = el.html();
                        }
                    }
                }
            };

            $.extend(options, widget.options.options);

            collection.fancybox(options);
        }
    });
})(__nodeNs__, __nodeId__);
