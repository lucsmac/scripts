const target = document.querySelector('.container.content__container')

const video = `<div class="video_wrapper">

<div class="videos">  
<video id="video" class="video" poster="https://mia.rtsp.me/xj_MgS2-n-kYf10av1d1nw/1600709446/poster/Hh9Ay5zB.jpg" style="opacity: 1;" src="blob:https://rtsp.me/94bb5a9d-dbd1-45be-95d5-36982a17adc8"></video>

           <div class="alert"><div style="display: none;"><span id="test"></span> <br> <b><a href="#" style="color:white" class="ws_abuse_a">Need Help?</a></b> </div></div>
           <div class="preload" style="display: none;"></div>
         <div class="button_play_big" style="display: none;">  </div>
               <div class="control_wrapper" style="display: block;">
                   <div class="main_control">
                       <div class="btns">
                           <div class="play" style="display: none;"></div>
                           <div class="pause" style="display: block;"></div>
                       </div>  
                           <div class="hd" style="display: none;">
                               <p>HD</p>
                           </div>
                            <div class="sound_div">
                       <div class="zv_btns">
                           <div class="sound"></div>
                           <div class="muted"></div>
                       </div>
                       <div class="sl_cont">
                           <div id="slider" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="width: 30%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 30%;"></span></div>
                       </div></div>
                       <div class="right">
                       <div class="zoom"></div>
                       
                           <div class="logo"><a href="https://rtsp.me/" title="rtsp website page" target="_blank">RTSP<span>.ME</span></a></div><div class="abuse"> </div>
                        </div>
                   </div>
               </div>
           </div>
       </div>`

const wrapper = document.createElement('div')
wrapper.innerHTML = video

target.parentNode.insertBefore(wrapper, target)