import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraDaiLy from './kiemTraDaiLy';
import kiemTraKhachHang from "./kiemTraKhachHang";
import kiemTraNhanVien from "./kiemTraNhanVien";
const routes = [
    {
        path : '/dai-ly/san-pham',
        component: ()=>import('../components/DaiLy/SanPham/index.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
    },
    {
        path : '/dai-ly/nhap-kho',
        component: ()=>import('../components/DaiLy/NhapKho/index.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
    },
    {
        path : '/dai-ly/danh-sach-nhap-kho',
        component: ()=>import('../components/DaiLy/DanhSachNhapKho/index.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
    },
    {
        path : '/dai-ly/dang-ky',
        component: ()=>import('../components/DaiLy/DangKy/index.vue'),
        meta: {layout : 'auth'},
    },
    {
        path : '/dai-ly/dang-nhap',
        component: ()=>import('../components/DaiLy/DangNhap/index.vue'),
        meta: {layout : 'auth'},
    },
    {
        path : '/dai-ly/quen-mat-khau',
        component: ()=>import('../components/DaiLy/QuenMatKhau/index.vue'),
        meta: {layout : 'auth'},
    },
    {
        path : '/dai-ly/lay-lai-mat-khau/:hash_reset',
        component: ()=>import('../components/DaiLy/ResetMatKhau/index.vue'),
        meta: {layout : 'auth'},
    },
    {
        path : '/dai-ly/kich-hoat-tai-khoan/:hash_active',
        component: ()=>import('../components/DaiLy/HomePage/KichHoatTaiKhoan.vue'),
        meta : {layout : 'dl'},
        props: true
    },
    
    {
        path : '/dai-ly/thong-ke-kho',
        component: ()=>import('../components/DaiLy/ThongKeKho/index.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
    },
    {
        path : '/dai-ly/thong-ke-1',
        component: ()=>import('../components/DaiLy/ThongKe/thong_ke_1.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
    },
    {
        path : '/dai-ly/thong-ke-2',
        component: ()=>import('../components/DaiLy/ThongKe/thong_ke_2.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
    },

    {
        path : '/dai-ly/don-hang',
        component: ()=>import('../components/DaiLy/DonHang/index.vue'),
        meta: {layout : 'dl'},
        beforeEnter: kiemTraDaiLy
    },
    {
        path : '/admin/nhan-vien',
        component: ()=>import('../components/Admin/NhanVien/index.vue'),
        beforeEnter : kiemTraNhanVien
    },
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta: {layout : 'auth'},
    },
    {
        path : '/admin/san-pham',
        component: ()=>import('../components/Admin/SanPham/index.vue'),
        beforeEnter : kiemTraNhanVien
    },
    {
        path : '/admin/danh-muc',
        component: ()=>import('../components/Admin/DanhMuc/index.vue'),
        beforeEnter : kiemTraNhanVien
    },
    {
        path : '/admin/dai-ly',
        component: ()=>import('../components/Admin/DaiLy/index.vue'),
        beforeEnter : kiemTraNhanVien
    },
    {
        path : '/admin/phan-quyen',
        component: ()=>import('../components/Admin/PhanQuyen/index.vue'),
        beforeEnter : kiemTraNhanVien
    },
    {
        path : '/admin/phieu-khuyen-mai',
        component: ()=>import('../components/Admin/PhieuKhuyenMai/index.vue'),
        beforeEnter : kiemTraNhanVien
    },
    {
        path : '/admin/quan-ly-khach-hang',
        component: ()=>import('../components/Admin/KhachHang/index.vue'),
        beforeEnter : kiemTraNhanVien
    },
    {
        path : '/admin/quan-ly-don-hang',
        component: ()=>import('../components/Admin/DonHang/index.vue'),
        beforeEnter : kiemTraNhanVien
    },


    // Client
    {
        path : '/',
        component: ()=>import('../components/HomePage/TrangChu/index.vue'),
        meta : {layout : 'client'}
    },
    {
        path : '/trang-chu/danh-sach-san-pham',
        component: ()=>import('../components/HomePage/TrangChu/DanhSachSanPham.vue'),
        meta : {layout : 'client'}
    },
    {
        path : '/chi-tiet-san-pham/:id_san_pham-:slug_san_pham',
        component: ()=>import('../components/HomePage/ChiTietSanPham/index.vue'),
        meta : {layout : 'client'},
        props: true
    },

    {
        path : '/profile',
        component: ()=>import('../components/HomePage/profile/index.vue'),
        meta : {layout : 'client'},
        beforeEnter: kiemTraKhachHang
    },
    {
        path : '/gio-hang',
        component: ()=>import('../components/HomePage/GioHang/index.vue'),
        meta : {layout : 'client'},
        beforeEnter: kiemTraKhachHang
    },
    {
        path : '/dang-ky',
        component: ()=>import('../components/KhachHang/DangKi/index.vue'),
        meta : {layout : 'auth'}
    },
    {
        path : '/dang-nhap',
        component: ()=>import('../components/KhachHang/DangNhap/index.vue'),
        meta : {layout : 'auth'}
    },
    {
        path : '/danh-sach-san-pham/:id_danh_muc-:slug_danh_muc',
        component: ()=>import('../components/HomePage/TrangChu/DanhSachSanPham.vue'),
        meta : {layout : 'client'},
        props: true
    },
    {
        path : '/kich-hoat-tai-khoan/:id_can_kich_hoat',
        component: ()=>import('../components/HomePage/TrangChu/KichHoatTaiKhoan.vue'),
        meta : {layout : 'client'},
        props: true
    },
    {
        path : '/lay-lai-mat-khau/:hash_reset',
        component: ()=>import('../components/KhachHang/ResetMatKhau/index.vue'),
        meta : {layout : 'auth'},
        props: true
    },
    {
        path : '/quen-mat-khau',
        component: ()=>import('../components/KhachHang/QuenMatKhau/index.vue'),
        meta : {layout : 'auth'},
        props: true
    },

    {
        path : '/tim-kiem',
        component: ()=>import('../components/HomePage/TrangChu/TimKiemSanPham.vue'),
        meta : {layout : 'client'},
        name : 'timKiem',
        props: true
    },

    {
        path : '/don-hang',
        component: ()=>import('../components/KhachHang/DonHang/index.vue'),
        meta : {layout : 'client'},
        beforeEnter: kiemTraKhachHang
    },

    // {
    //     path : '/danh-sach-san-pham/:id',
    //     component: ()=>import('../components/HomePage/SanPham/ListSanPham/index.vue'),
    //     meta : {layout : 'client'}
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router