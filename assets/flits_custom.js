
/****PLEASE DON'T MAKE CHANGES IN THIS FILE IT'S AFFECT THE CODE IF YOU NEED ANY HELP PLEASE CONTACT TO FLITS TEAM support@getflits.com ****/
(function(Flits) {
  /* To load js in all pages */
  if(Flits.Metafields.IS_SOCIAL_LOGIN_PAID && Flits.Metafields.IS_SOCIAL_LOGIN_ENABLE){
    if(window.flitsObjects.allCssJs.socialLoginJs){
      Flits.LoadStyleScript('socialLoginJs',window.flitsObjects.allCssJs.socialLoginJs.url);
    }
  }

  Flits(document).on('Flits:Navigation:Loaded', function(event){
    debugger;
    let settings = event.detail.settings;
    var obj_return = {
      title: 'Return an Item',
      url:'https://returns.mfimedical.com',
      target:1,
      badge: null,
      icon: null,
      isShow: 1,
      loader:null,
      body_html: ''
    }
    var obj_help = {
      title: 'Help Center',
      url:'https://mfimedical.com/pages/contact-us',
      target:1,
      badge: null,
      icon: null,
      isShow: 1,
      menuClass:"flits-d-none",
      loader:null,
      body_html: ''
    }
    var obj_orders = {
      title: 'Orders Not Yet Shipped',
      url:'#orders_not_shipped',
      target:0,
      badge: null,
      icon: null,
      isShow: 1,
      loader:null,
      body_html: '<div class="flits-order-not-sh"></div>'
    }
    var obj_orders_ca = {
      title: 'Cancelled Orders',
      url:'#orders_cancelled',
      target:0,
      badge: null,
      icon: null,
      isShow: 1,
      loader:null,
      body_html: '<div class="flits-order-cancelled"></div>'
    }
    
    //  var obj_account = {
    //   title: 'Account',
    //   url:'#account',
    //   target:0,
    //   badge: null,
    //   icon: null,
    //   isShow: 1,
    //   loader:null,
    //   body_html: ''
    // }
    // settings.navs.splice(0, 1, obj_account);
    var obj_subscriptions = {
      title: 'Subscriptions',
      url:'https://mfimedical.com/tools/recurring/get-subscription-access?passwordless=true',
      target:0,
      badge: null,
      icon: null,
      isShow: 1,
      loader:null
    }
    
    if(window.isSubscribed){
      settings.navs.splice(2, 0, obj_orders,obj_orders_ca,obj_subscriptions,obj_return,obj_help);
    } else {
      settings.navs.splice(2, 0, obj_orders,obj_orders_ca,obj_return,obj_help);
    }
  });


    Flits.fn.extend({
    appendSocialLoginDivAdded: function(socialLoginBtnGroup, isTrue) {
      var settings = Flits.SocialLogin.settings;
      return this.filter(':not([data-flits="social-login-added"])').each(function(index, el) {
        if (el = Flits(el),
            isTrue && (el.css('display') == 'none'))
          return;
        if (typeof el[0].addEventListener != 'function')
          return;
        var parent = el.parent();
        var cloneNode = socialLoginBtnGroup.clone(!0);
        parent.append(cloneNode),
          el.attr('data-flits', 'social-login-added'),
          parent.attr('data-flits', 'social-login-parent'),
          settings.automaticAppendDivFunction.apply(this, [el, parent, cloneNode]),
          Flits.dispatchEvent('Flits:SocialLoginAutomaticCode:Loaded', {
          el: el,
          parent: parent,
          cloneNode: cloneNode
        });
      }),
        this;
    }
  })

  var  buttonAppendButtons =  function() {
    let selector = Flits.SocialLogin.settings.domSelector;
    let selectorLength = Flits.SocialLogin.settings.domSelector.length;
    let items = Flits.SocialLogin.settings.buttonConfig;
    let socialLoginBtnGroup = Flits('<div />');
    socialLoginBtnGroup.addClass('flits-social-login-btn-grp');
    let socialLoginErrorDiv = Flits('<div />');
    socialLoginErrorDiv.addClass('flits-social-login-error'),
      Flits.each(items, function(index, item) {
      if (Flits.Metafields[item.metafieldName] && item.isDisplay) {
        let btnClone = Flits('#flits-social-login-btn-template').clone();
        btnClone.removeAttr('id');
        let hrefAttr = btnClone.attr('data-href').replace('proxy_name', Flits.proxy_name).replace('app_id', Flits.app_id).replace('shop_id', Flits.shop_id).replace('shop_token', Flits.token).replace('login_type', item.login_type);
        btnClone.attr('href', hrefAttr),
          btnClone.addClass(item.btn_class),
          btnClone.css('order', item.order),
          Flits(btnClone).find('.flits-social-login-btn-img').html(item.icon_img),
          Flits(btnClone).find('.flits-social-login-btn-text').html(item.login_name),
          socialLoginBtnGroup.append(btnClone);
        var s = socialLoginBtnGroup.find(".flits-social-login-btn-googleplus");
        console.log(s);
      }
    });
    
    let code = Flits('<div />');
    let orText = Flits('<p>Or login using:</p>');
    code.prepend(orText);
    for (code.addClass('flits-social-login-container'),
        
         code.append(socialLoginBtnGroup),
         code.append(socialLoginErrorDiv),
         i = 0; Flits.SocialLogin.settings.domSelector.length > i; i++)
      Flits.SocialLogin.settings.domSelector,
        Flits(Flits.SocialLogin.settings.domSelector[i][0]).appendSocialLoginDivAdded(code, Flits.SocialLogin.settings.domSelector[i][1]);
  };
 

  Flits(document).on('Flits:SocialLogin:Loaded', function(event){
    setTimeout(function(){
    },1500);
       buttonAppendButtons();
  });

  function flitsCustomIntregation(){
    var integrated_page =Flits(".flits-custom-profile-page").children();
    var integrated_page_2 =Flits(".flits-custom-page-order-ntsh").children();
    var integrated_page_3 =Flits(".flits-custom-page-order-cancelled").children();

    Flits("#flits_tab_woofs-club").append(integrated_page);
    Flits("#flits_tab_orders_not_shipped").find(".flits-order-not-sh").append(integrated_page_2);
    Flits("#flits_tab_orders_cancelled").find(".flits-order-cancelled").append(integrated_page_3);
    
    Flits(".flits-custom-profile-page").remove();
    Flits(".flits-custom-page-order-ntsh").remove();
    Flits(".flits-custom-page-order-cancelled").remove();
  }

  Flits(document).on('Flits:AccountPage:Loaded', function(event){  
    setTimeout(function(){
      flitsCustomIntregation();
    },1500);
  });

   
}(Flits));
