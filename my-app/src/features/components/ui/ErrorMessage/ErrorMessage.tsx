import Image from 'next/image';

const ErrorMessage = () => {
    return (
        <div
            style={{
                display: 'block',
                margin: '30px auto',
                textAlign: 'center',
            }}
        >
            <Image
                src={'/error/errorMessage.png'}
                width={50}
                height={50}
                alt="error"
                style={{
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'contain',
                    width: '50px',
                    height: '50px',
                }}
            />
            <p
                className="roboto-regular"
                style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: '30px',
                    fontSize: '16px',
                    fontWeight: 400,
                    width: '300px',
                }}
            >
                There was an error loading the data. Please try again later.
            </p>
        </div>
    );
};

export default ErrorMessage;
