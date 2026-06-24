import React from 'react';
import Image from "next/legacy/image"; // For icons
import { NextPage } from 'next'; // Import types
import { useTranslation } from 'next-i18next'; // Import useTranslation
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'; // Import helpers
import { COMPANY_NAME } from '../../lib/companyConfig';

// Define namespaces required for this page
const namespacesRequired = ['common', 'navbar', 'footer', 'contact'];

const ContactPage: NextPage = () => {
  const { t } = useTranslation('contact'); // Use 'contact' namespace

  return (
    <div className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--secondary)] font-[Poppins] mb-4">
            {t('pageTitle', { defaultValue: '联系我们'})}
          </h1>
          <p className="text-lg md:text-xl text-[var(--accent-gray)] font-[Asap] max-w-3xl mx-auto">
            {t('pageDescription', { defaultValue: '我们很乐意听到您的声音！无论您是咨询合作、寻求支持还是有任何疑问，请随时与我们联系。'})}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info & Hours */}
          <div className="bg-white p-8 rounded-lg shadow-md">
             <h2 className="text-2xl md:text-3xl font-semibold text-black font-[Poppins] mb-6">{t('info.title', { defaultValue: '联系方式'})}</h2>
             <ul className="space-y-4">
               <li className="flex items-center space-x-3">
                  <Image src="/icons/phone.svg" alt={t('info.phoneAlt', { defaultValue: '电话'})} width={24} height={24} className="text-[var(--primary)]"/>
                 <span className="text-gray-700 font-[Asap]">{t('info.phoneNumber', { defaultValue: '+86 138 1234 5678'})}</span>
               </li>
               <li className="flex items-center space-x-3">
                  <Image src="/icons/email.svg" alt={t('info.emailAlt', { defaultValue: '邮箱'})} width={24} height={24}/>
                 <span className="text-gray-700 font-[Asap]">{t('info.emailAddress', { defaultValue: `info@${COMPANY_NAME.toLowerCase()}.com` })}</span>
               </li>
               <li className="flex items-start space-x-3">
                  <Image src="/icons/location.svg" alt={t('info.addressAlt', { defaultValue: '地址'})} width={24} height={24} className="mt-1"/>
                 <span className="text-gray-700 font-[Asap] leading-relaxed">
                   {t('info.address', { defaultValue: '示例地址, 某某区, 某某市, 中国'})}
                 </span>
               </li>
                <li className="flex items-center space-x-3 pt-4 border-t mt-4">
                  <Image src="/icons/schedule.svg" alt={t('info.hoursAlt', { defaultValue: '工作时间'})} width={24} height={24}/>
                 <span className="text-gray-700 font-[Asap]">
                    {t('info.hours', { defaultValue: '周一至周五 08:00 - 18:00 / 周日 08:00 - 14:00'})}
                 </span>
               </li>
             </ul>
             {/* Optional: Map */}
             {/* <div className="mt-8 h-64 bg-gray-200 rounded-md">地图嵌入位置</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Use the helper to generate getStaticProps
const getStaticProps = makeStaticProps(namespacesRequired);

// Export getStaticPaths and getStaticProps
export { getStaticPaths, getStaticProps };

export default ContactPage;
