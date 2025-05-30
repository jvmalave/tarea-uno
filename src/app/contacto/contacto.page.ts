import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@Component({
  standalone:false,
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  contactoForm!: FormGroup;
  topicos = [
    { id: 1, 
      nombre: 'Soporte', 
      icon:'cog' ,
      respuesta: `
      ¡Hola! <br><br>
      Necesitas soporte técnico, aquí tienes algunas opciones y recomendaciones:<br><br>
      <ul>
        <li><strong>Consultas técnicas:</strong><br>
          ¿Tienes dudas sobre el desarrollo de tu app móvil con Ionic-Angular? Puedes contactarme para resolver tus preguntas sobre componentes, navegación, formularios, integración de servicios o cualquier aspecto técnico relevante.</li>
        <li><strong>Reporte de errores:</strong><br>
          ¿Encontraste un bug o un comportamiento inesperado en la app? Por favor, describe el problema con el mayor detalle posible y te ayudaré a solucionarlo.</li>
        <li><strong>Solicitud de funcionalidades:</strong><br>
          ¿Te gustaría que la app tuviera una nueva función? ¡Házmelo saber! Estoy abierto a sugerencias para mejorar la experiencia de usuario.</li>
        <li><strong>Soporte personalizado:</strong><br>
          Si necesitas un desarrollo a medida, integración con APIs externas, o asesoría en arquitectura de software, también puedo ayudarte.</li>
      </ul>
      <br>
      <strong>¿Cómo puedo ayudarte hoy?</strong>
    ` },
    { id: 2, 
      nombre: 'Información', 
      icon: 'information-circle' ,
      respuesta: `<p><strong>Te ofrezco los siguientes servicios:</strong></p>
      <ul>
        <li><strong>Desarrollo y mantenimiento de aplicaciones móviles multiplataforma</strong><br>
          (iOS, Android y web desde un solo código base)</li>
        <li><strong>Integración con APIs y servicios externos</strong><br>
          (Conecta tu app con servicios de datos, autenticación y más)</li>
        <li><strong>Diseño de interfaces modernas y adaptativas</strong><br>
          (Componentes personalizados y adaptados a cualquier dispositivo)</li>
        <li><strong>Gestión de usuarios y seguridad</strong><br>
          (Autenticación, autorización y protección de datos personales)</li>
        <li><strong>Sincronización y almacenamiento de datos</strong><br>
          (Almacenamiento local y en la nube para una experiencia fluida)</li>
        <li><strong>Notificaciones push y geolocalización</strong><br>
          (Mantén informados a los usuarios y aprovecha la ubicación del dispositivo)</li>
        <li><strong>Soporte técnico y actualizaciones continuas</strong><br>
          (Asistencia y mejoras constantes para garantizar el mejor rendimiento)</li>
        <li><strong>Publicación en tiendas de aplicaciones</strong><br>
          (Ayuda para subir y mantener tu app en Google Play y App Store)</li>
        <li><strong>Consultoría y asesoría técnica</strong><br>
          (Soporte personalizado para resolver dudas y optimizar tu proyecto)</li>
      </ul>
    ` },
    { id: 3, 
      nombre: 'Preguntas frecuentes',
      icon: 'help', 
      respuesta: `
        <p><strong>Preguntas frecuentes sobre la aplicación móvil desarrollada con Ionic y Angular</strong></p>
        <ul>
          <li><strong>¿Cómo puedo modificar mis datos personales?</strong><br>
            Ve a la sección “Información Personal” y actualiza tus datos en el formulario.</li>
          <li><strong>¿Cómo contacto al soporte técnico?</strong><br>
            Selecciona el tópico “Soporte” y envía tu consulta. Te responderemos lo antes posible.</li>
          <li><strong>¿La app funciona sin conexión?</strong><br>
            Actualmente, la app requiere conexión a Internet para sincronizar los datos y ofrecerte la mejor experiencia.</li>
          <li><strong>¿Puedo sugerir nuevas funciones?</strong><br>
            ¡Por supuesto! Utiliza el formulario de contacto para enviar tus sugerencias.</li>
        </ul>
        <p><strong>¿Tienes otra pregunta? ¡Házmelo saber!</strong></p>
      ` }
  ];

  
  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController
  ) {}


  ngOnInit() {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  async mostrarRespuestaTopico(nombre: string, respuesta: string) {
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
      componentProps: {
        nombre,
        respuesta
      }
    });
    await modal.present();
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      // Aquí puedes enviar los datos a tu backend o mostrarlos en consola
      console.log(this.contactoForm.value);
      alert('Tu mesanje se ha enviado con exito');

    this.contactoForm.reset();
    }
  }
}
