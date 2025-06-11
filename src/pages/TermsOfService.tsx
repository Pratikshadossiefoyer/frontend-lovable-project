
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, CreditCard, AlertTriangle, Scale, Shield } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden mb-8">
          <CardHeader className="bg-gradient-to-br from-slate-50 to-gray-100">
            <CardTitle className="text-2xl text-gray-900">Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              By accessing and using SEO Master, you accept and agree to be bound by the terms and provision of this agreement. 
              These Terms of Service govern your use of our SEO analysis and optimization platform.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Use License & Account</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Account Requirements</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>You must be at least 18 years old to create an account</li>
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">License Grant</h4>
                  <p className="text-gray-700">
                    We grant you a limited, non-exclusive, non-transferable license to use SEO Master 
                    for your business purposes in accordance with these terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Service Description</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-gray-700 mb-4">
                SEO Master provides the following services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Website SEO analysis and performance monitoring</li>
                <li>Keyword research and ranking tracking</li>
                <li>Technical SEO audits and recommendations</li>
                <li>Competitor analysis and market insights</li>
                <li>Custom reports and analytics dashboards</li>
                <li>Team collaboration and project management tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Billing & Payments</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Subscription Plans</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Free plan with limited features and usage</li>
                    <li>Paid plans with extended features and higher limits</li>
                    <li>Enterprise plans with custom pricing and features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Terms</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Subscription fees are billed in advance</li>
                    <li>All payments are non-refundable unless required by law</li>
                    <li>Price changes will be communicated 30 days in advance</li>
                    <li>Accounts may be suspended for non-payment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-gray-700 mb-4">
                You may not use SEO Master for any of the following:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Any unlawful purpose or in violation of applicable laws</li>
                <li>Transmitting malware, viruses, or harmful code</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Reverse engineering or copying our software</li>
                <li>Sharing your account credentials with unauthorized users</li>
                <li>Using automated tools to scrape or harvest data</li>
                <li>Interfering with the normal operation of our services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Availability</h4>
                  <p className="text-gray-700">
                    While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. 
                    We are not liable for any damages resulting from service interruptions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Accuracy</h4>
                  <p className="text-gray-700">
                    SEO data and analytics are provided for informational purposes. We do not guarantee 
                    the accuracy or completeness of third-party data sources.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Maximum Liability</h4>
                  <p className="text-gray-700">
                    Our total liability for any claims shall not exceed the amount paid by you 
                    for the service during the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Termination</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Termination by You</h4>
                  <p className="text-gray-700">
                    You may terminate your account at any time through your account settings. 
                    Paid subscriptions will remain active until the end of the billing period.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Termination by Us</h4>
                  <p className="text-gray-700">
                    We may terminate or suspend your account immediately for violations of these terms, 
                    non-payment, or if required by law.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Effect of Termination</h4>
                  <p className="text-gray-700">
                    Upon termination, your right to use the service ceases immediately. 
                    We may delete your data after a reasonable period.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-xl border-0 rounded-2xl overflow-hidden mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Contact & Changes</h3>
            <p className="text-slate-200 mb-6">
              We may update these Terms of Service from time to time. Continued use of our service 
              constitutes acceptance of any changes.
            </p>
            <div className="space-y-2">
              <p className="text-slate-300">Email: legal@seomaster.com</p>
              <p className="text-slate-300">Address: 123 SEO Street, Digital City, DC 12345</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
