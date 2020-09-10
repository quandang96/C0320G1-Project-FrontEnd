// tslint:disable-next-line:class-name
export const validation = {
  newPasswordErrors: [
    {code: 'required', message: 'Vui lòng nhập mật khẩu mới'},
    {code: 'pattern', message: 'Mật khẩu không  chứa ký tự đặc biệt'},
    {code: 'minlength', message: 'Mật khẩu phải lớn hơn 8 ký tự'},
    {code: 'maxlength', message: 'Mật khẩu phải bé hơn 16 ký tự'},
  ],
  passwords: [
    {code: 'required', message: 'Vui lòng nhập mật khẩu hiện tại'},
  ],
};
