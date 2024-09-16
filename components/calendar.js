import React, { useEffect } from 'react';

function Calendar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      Calendly.initInlineWidget({
        url: 'https://calendly.com/citrusoft/30min',
        parentElement: document.getElementById('calendly-widget'),
        prefill: {},
        utm: {}
      });
    };

    function isCalendlyEvent(e) {
      return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
    };

    const handleEventScheduled = async (event) => {
      if(!isCalendlyEvent(event)) return;
      if (event.data.event && event.data.event === 'calendly.event_scheduled') {
        const { default: ReactPixel } = await import("react-facebook-pixel");
        ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID);
        ReactPixel.track("Schedule");
      }
    };

    window.addEventListener('message', handleEventScheduled);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleEventScheduled);
    };
  }, []);

  return (
    <div className="!m-0 !p-0 w-full custom-opacity" id="contacto">
      <div id="calendly-widget" style={{ height: '700px' }}></div>
    </div>
  );
}

export default Calendar;