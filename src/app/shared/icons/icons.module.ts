import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Home, File, ShoppingCart, Users, BarChart2, Layers, PlusCircle, FileText } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  Home,
  File,
  ShoppingCart,
  Users,
  BarChart2,
  Layers,
  PlusCircle,
  FileText, 
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [ FeatherModule]
})
export class IconsModule { }
