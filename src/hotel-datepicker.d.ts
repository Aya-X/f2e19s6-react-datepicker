/* eslint-disable class-methods-use-this */
declare module 'hotel-datepicker' {
  interface HotelDatepickerOptions {
    format?: string;
    infoFormat?: string;
    inline?: boolean;
    clearButton?: boolean;
    submitButton?: boolean;
    onSelectRange?: () => void;
  }

  class HotelDatepicker {
    constructor(inputElement: HTMLInputElement, options?: HotelDatepickerOptions);

    getNights(): number {
      throw new Error('Method not implemented.');
    }
  }

  export default HotelDatepicker;
}
