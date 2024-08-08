import React, { Fragment } from 'react'

const DeleteConfirmation = ({ open, handleClose }) => {
    return (
        <Fragment>
            {
                open &&
                <div className='w-full h-screen fixed top-0 left-0 flex flex-col items-center justify-center lg:px-0 px-5'>

                    <div className='lg:w-5/12 bg-white md:w-7/12 mx-auto min-h-60 rounded-lg'>

                    </div>

                </div>
            }
        </Fragment>
    )
}

export default DeleteConfirmation