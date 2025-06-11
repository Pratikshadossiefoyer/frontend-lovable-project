
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, Mail, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden mb-8">
          <CardHeader className="bg-gradient-to-br from-slate-50 to-gray-100">
            <CardTitle className="text-2xl text-gray-900">Our Commitment to Your Privacy</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              At SEO Master, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our SEO analysis and optimization services.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Name and email address when you create an account</li>
                    <li>Business information and website domains you analyze</li>
                    <li>Payment information for premium services</li>
                    <li>Communication preferences and support inquiries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Website analytics and SEO performance data</li>
                    <li>Browser type, IP address, and device information</li>
                    <li>Usage patterns and feature interactions</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide and improve our SEO analysis services</li>
                <li>Generate personalized reports and recommendations</li>
                <li>Process payments and manage your account</li>
                <li>Send important updates and marketing communications (with consent)</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations and respond to requests</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Data Security & Protection</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure data storage with regular backups</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security audits and monitoring</li>
                <li>GDPR and CCPA compliance measures</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Data Sharing & Third Parties</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share data only in these circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>With trusted service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Your Rights & Choices</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access and review your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of marketing communications</li>
                <li>Restrict or object to certain data processing</li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium">
                  To exercise these rights, please contact us at privacy@seomaster.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-xl border-0 rounded-2xl overflow-hidden mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Questions About This Policy?</h3>
            <p className="text-slate-200 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="space-y-2">
              <p className="text-slate-300">Email: privacy@seomaster.com</p>
              <p className="text-slate-300">Address: 123 SEO Street, Digital City, DC 12345</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
