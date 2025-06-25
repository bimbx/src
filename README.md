# 🗳️ SRC - Statistical Research Corporation

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**Casa Encuestadora Líder en México**

*Encuestas Electorales Precisas | Investigación de Mercados | Estudios de Opinión Pública*

[🌐 Website](https://src.org.mx) • [📊 Encuestas](https://src.org.mx/encuestas) • [📞 Contacto](https://src.org.mx/contacto)

</div>

## 📋 Descripción

Statistical Research Corporation (SRC) es una casa encuestadora especializada en investigación de mercados y opinión pública en México. Este proyecto es el sitio web oficial de SRC, desarrollado con tecnologías modernas para ofrecer una experiencia de usuario excepcional.

### 🎯 Características Principales

- ✅ **Encuestas Electorales** con margen de error menor al 3.8%
- ✅ **Investigación de Mercados** cuantitativa y cualitativa
- ✅ **Estudios de Opinión Pública** para medios y gobierno
- ✅ **Cobertura Nacional** en los 32 estados de México
- ✅ **Metodología Certificada** y resultados confiables

## 🚀 Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 15.3.3 | Framework React para producción |
| **TypeScript** | 5.0+ | Tipado estático y mejor DX |
| **Tailwind CSS** | 3.0+ | Framework CSS utilitario |
| **Lucide React** | Latest | Iconografía moderna |
| **React** | 18+ | Biblioteca de UI |

## 🛠️ Instalación y Configuración

### Prerrequisitos

- **Node.js** 18.17 o superior
- **npm** o **yarn**
- **Git**

### Clonar el Repositorio

```bash
git clone https://github.com/YOUR_USERNAME/src.mx.git
cd src.mx
```

### Instalar Dependencias

```bash
npm install
# o
yarn install
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Configuración del sitio
NEXT_PUBLIC_SITE_URL=https://src.org.mx
NEXT_PUBLIC_COMPANY_NAME=Statistical Research Corporation

# APIs externas (si aplica)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
NEXT_PUBLIC_MAPS_API_KEY=your_maps_key

# Configuración de contacto
NEXT_PUBLIC_CONTACT_EMAIL=info@src.org.mx
NEXT_PUBLIC_CONTACT_PHONE=+525587894703
NEXT_PUBLIC_WHATSAPP=+5218131548025
```

### Ejecutar en Desarrollo

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src.mx/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── nosotros/          # Página "Nosotros"
│   ├── encuestas/         # Página de encuestas
│   ├── servicios/         # Página de servicios
│   ├── contacto/          # Página de contacto
│   └── api/               # API Routes
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI
│   ├── sections/         # Secciones de página
│   └── layout/           # Componentes de layout
├── public/               # Archivos estáticos
│   ├── images/          # Imágenes
│   └── icons/           # Iconos
├── lib/                  # Utilidades y configuración
├── types/               # Definiciones de TypeScript
└── data/                # Datos estáticos
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación
npm run start        # Inicia servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Corrige errores de ESLint automáticamente
npm run type-check   # Verifica tipos de TypeScript

# Herramientas
npm run clean        # Limpia archivos de construcción
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno
3. ¡Despliega automáticamente!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/src.mx)

### Otros Servicios

- **Netlify**: Conecta tu repo y despliega
- **AWS Amplify**: Hosting escalable de AWS
- **Digital Ocean**: App Platform
- **Railway**: Despliegue simplificado

## 📊 Funcionalidades del Sitio

### 🏠 Página Principal
- Hero section con call-to-actions
- Sección de noticias en medios
- Información corporativa
- Mapa interactivo de México
- Servicios destacados

### 📈 Sección de Encuestas
- Rankings de alcaldes por estado
- Encuestas electorales recientes
- Estudios de opinión pública
- Visualizaciones de datos

### 🏢 Páginas Corporativas
- Información de la empresa
- Metodología de trabajo
- Equipo profesional
- Casos de éxito

### 📞 Contacto
- Formulario de contacto
- Información de ubicación
- Enlaces a redes sociales
- WhatsApp integrado

## 🎨 Personalización

### Colores de Marca

```css
/* Tailwind CSS personalizado */
:root {
  --src-blue: #1f4e79;
  --src-light-blue: #3b82f6;
  --src-dark: #1e293b;
  --src-gray: #64748b;
}
```

### Tipografía

El sitio utiliza **Inter** como fuente principal para una lectura óptima.

## 🔒 SEO y Performance

- ✅ **Metadata optimizada** para cada página
- ✅ **Open Graph** para redes sociales
- ✅ **Sitemap.xml** generado automáticamente
- ✅ **Robots.txt** configurado
- ✅ **Core Web Vitals** optimizados
- ✅ **Imágenes optimizadas** con Next.js Image

## 🧪 Testing

```bash
# Instalar dependencias de testing
npm install -D @testing-library/react @testing-library/jest-dom jest

# Ejecutar tests
npm run test
npm run test:watch
npm run test:coverage
```

## 🤝 Contribuir

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un **Pull Request**

### Convenciones de Commit

```
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: formato, sin cambios de código
refactor: refactorización de código
test: añadir tests
chore: tareas de mantenimiento
```

## 📱 Responsive Design

El sitio está optimizado para todos los dispositivos:

- 📱 **Mobile**: 320px - 768px
- 📟 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+
- 🖥️ **Large Desktop**: 1440px+

## 📈 Analytics y Monitoring

- **Google Analytics** para seguimiento de tráfico
- **Google Search Console** para SEO
- **Vercel Analytics** para performance
- **Sentry** para monitoreo de errores (opcional)

## 🔗 Enlaces Importantes

- **Sitio Web**: [src.org.mx](https://src.org.mx)
- **LinkedIn**: [Statistical Research Corporation](https://www.linkedin.com/company/statisticalresearch/)
- **Facebook**: [SRC](https://www.facebook.com/sresearchcorp)
- **Twitter**: [@sresearchcorp](https://x.com/sresearchcorp)
- **Instagram**: [@sresearchcorp](https://www.instagram.com/sresearchcorp/)

## 📞 Contacto

**Statistical Research Corporation**

📍 **Dirección**: Ave. Eugenio Garza Sada 3001, INT. 18B, Col. Altavista, Monterrey, Nuevo León, C.P 64840

📞 **Teléfono**: [55 8789 4703](tel:+525587894703)  
📱 **WhatsApp**: [81 3154 8025](https://wa.me/5218131548025)  
📧 **Email**: [info@src.org.mx](mailto:info@src.org.mx)  
📧 **Comercial**: [cmercado@src.org.mx](mailto:cmercado@src.org.mx)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**Desarrollado con ❤️ por el equipo de SRC**

*Casa encuestadora con los resultados más certeros de México*

</div>