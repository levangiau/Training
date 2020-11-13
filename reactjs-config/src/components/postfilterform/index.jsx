import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostfilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostfilterForm.defaultProps = {
    onSubmit: null
}

function PostfilterForm(props) {
    const { onSubmit } = props
    const [searchTemp, setsearchTemp] = useState('')
    /**
     * useRef: no co tac dung khi no thay doi lai gia tri cua searTemp thi no van giu lai gia tri do ma khong bi thay doi khi setsearchTemp cap nhat lai
     */
    const typingTimeout = useRef(null) //khoi tao 1 cai ref co ten ..........
    function hanldesearch(e) {
        //tao bien tam luu tru
        const giatri = e.target.value
        //cap nhat lai nhung thay doi
        setsearchTemp(giatri)
        //gui du lieu vua nhap di cho thang cha nhung truoc do phai kiem tra coi thang cha co goi khong
        if (!onSubmit) return
        /**
         * Ky thuat debounce
         * dung ky thuat nay de cho nguoi dung khi nhap xong gia tri thi moi bat dau xu ly 
         */
        //kiem tra setTimeout trong timer quy dinh neu nhu trong timer do co thay doi thi no se xoa timer do va tiep tuc doi
        if (typingTimeout.current) clearTimeout(typingTimeout.current)
        //lap thoi gian de luu tru, khi co du leu thay doi thi no se doi trong khoang thoi gian quy dinh de thuc hien
        // "3000" la thoi gian ma ta quy dinh khoang thoi gian cho nhung doan code ben trong no thuc hien.timer nay tuy thay doi
        typingTimeout.current = setTimeout(() => {
            //tao noi luu tru tam thoi cua nhung thay doi do
            const formValue = {
                //e.target.value :do khong duoc goi truc tiep trong "WebAPI" vi no se defound lai se mat du lieu nen goi bien tam de dung
                giatri
            }
            //sau do gui du lieu 
            onSubmit(formValue)

        }, 300);
    }
    return (
        <form >
            <input type='text'
                value={searchTemp}
                onChange={hanldesearch} //khi co su thay doi tren fill input
            />
        </form>
    );
}

export default PostfilterForm;