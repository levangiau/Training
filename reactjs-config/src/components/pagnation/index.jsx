import React from 'react';
import PropTypes from 'prop-types';

Paganation.propTypes = {
    pagnation: PropTypes.object.isRequired,// yeu cau phai truyen vao sp
    onPageChange: PropTypes.func,
};

Paganation.defaultProps = {
    onPageChange: null
}

function Paganation(props) {
    const { pagnation, onPageChange } = props
    //tao ra page,limit,totalrow lay tu data xuong
    const { _page, _limit, _totalRows } = pagnation
    // kiem tra trang cuoi la nhieu
    /**
     * x = 51/10 = 5.1
     * Math.ceil(): ham tra ve gia tri so nguyen.vi du Math.ceil(x) => x = 6 tuc la "5.1" no se lay gia tri tiep theo cua so do o dang nguyen
     * cach chia so trang du vao tong so san pham / so san pham trong 1 trang.vi du: tong san pham la 50 va sp trong 1 trang la 10
     * => page = 50/10 = 5. vay ta duoc 5 trang
     */
    const totalPage = Math.ceil(_totalRows / _limit)
    //console.log(_totalRows)
    //
    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
        <div>
            <button
                disabled={_page <= 1} //an khi Page no be hon 1
                onClick={() => handlePageChange(_page - 1)}
            >Prev</button>

            <button
                disabled={_page >= totalPage} //an khi Page no be hon 1
                onClick={() => handlePageChange(_page + 1)}
            >Next</button>
        </div>
    );
}

export default Paganation;