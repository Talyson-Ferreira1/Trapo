// use client
import UploadImage from '@/app/components/register-product-image/Upload-Image';
import RegisterProductInfo from '@/app/components/register-product-information/register-information';
import './style.css';

export default function Register() {
  return (
    <main className="container-Register">
      <UploadImage />
      <RegisterProductInfo />
    </main>
  );
}
