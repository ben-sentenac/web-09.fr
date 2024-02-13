function ButtonBase({ href, text }) {
    return (
        <a className="inline-flex items-center justify-center
        border-[#19303d] border-2 
        border-dashed m-2 py-4 px-7 
        rounded-md hover:bg-dark 
        hover:text-[#fff] cursor-pointer" href={ href }>{ text }</a>
    );
}

export default ButtonBase;