$(function() {
  var instance = openerp;
  var _t = instance.web._t,
     _lt = instance.web._lt;
  var QWeb = instance.web.qweb;
  
  instance.web.form.FieldMany2Many.include({
    initialize_content: function() {
      this.$el.attr('data-bt-testing-model_name', this.view && this.view.fields_view.model);
      this.$el.attr('data-bt-testing-name', this.name);
      this.$el.attr('data-bt-testing-submodel_name', this.dataset && this.dataset.model);
      this._super.apply(this, arguments);
    }
  });
});