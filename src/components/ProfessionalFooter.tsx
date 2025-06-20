
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function ProfessionalFooter() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SEO Detective</h3>
                <p className="text-sm text-blue-400 font-medium">Professional SEO Tool</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Advanced SEO analytics and optimization platform designed to help businesses improve their online presence and search rankings.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/dashboard" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Dashboard</a></li>
              <li><a href="/manage-projects" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Manage Projects</a></li>
              <li><a href="/website-analysis" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Website Analysis</a></li>
              <li><a href="/team-members" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Team Members</a></li>
              <li><a href="/add-project" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Add Project</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">GDPR Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Data Security</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300 font-medium">support@seodetective.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300 font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300 font-medium">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />
      
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="font-medium">© 2025 SEO Detective. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">Powered by</span>
            <span className="text-blue-400 font-semibold">GrowBizz</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
