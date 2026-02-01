// Three.js 3D Scene for Portfolio
// Advanced 3D animations with floating geometric shapes and parallax effects

class ThreeScene {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.geometries = [];
        this.particles = null;
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        this.scrollY = 0;
        this.clock = new THREE.Clock();

        this.init();
        this.createGeometries();
        this.createParticles();
        this.addEventListeners();
        this.animate();
    }

    init() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x0f172a, 10, 50);

        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 30;

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('three-canvas'),
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0);
    }

    createGeometries() {
        const geometryTypes = [
            new THREE.BoxGeometry(2, 2, 2),
            new THREE.SphereGeometry(1.5, 32, 32),
            new THREE.TorusGeometry(1.2, 0.4, 16, 100),
            new THREE.OctahedronGeometry(1.5),
            new THREE.IcosahedronGeometry(1.5)
        ];

        const materials = [
            new THREE.MeshPhongMaterial({
                color: 0x4f46e5,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            }),
            new THREE.MeshPhongMaterial({
                color: 0x06b6d4,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            }),
            new THREE.MeshPhongMaterial({
                color: 0x8b5cf6,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            })
        ];

        // Create multiple floating geometries
        for (let i = 0; i < 15; i++) {
            const geometry = geometryTypes[Math.floor(Math.random() * geometryTypes.length)];
            const material = materials[Math.floor(Math.random() * materials.length)];
            const mesh = new THREE.Mesh(geometry, material);

            // Random position
            mesh.position.x = (Math.random() - 0.5) * 50;
            mesh.position.y = (Math.random() - 0.5) * 50;
            mesh.position.z = (Math.random() - 0.5) * 30;

            // Random rotation
            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;

            // Store initial position for animation
            mesh.userData.initialPosition = mesh.position.clone();
            mesh.userData.rotationSpeed = {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            };
            mesh.userData.floatSpeed = Math.random() * 0.5 + 0.5;
            mesh.userData.floatOffset = Math.random() * Math.PI * 2;

            this.geometries.push(mesh);
            this.scene.add(mesh);
        }

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x4f46e5, 1, 100);
        pointLight1.position.set(10, 10, 10);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x06b6d4, 1, 100);
        pointLight2.position.set(-10, -10, 10);
        this.scene.add(pointLight2);
    }

    createParticles() {
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 100;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            color: 0x4f46e5,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }

    addEventListeners() {
        // Mouse move for parallax
        window.addEventListener('mousemove', (event) => {
            this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // Scroll for depth effect
        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY;
        });

        // Resize handler
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const elapsedTime = this.clock.getElapsedTime();

        // Smooth mouse movement
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        // Camera parallax based on mouse
        this.camera.position.x = this.mouse.x * 5;
        this.camera.position.y = this.mouse.y * 5;
        this.camera.lookAt(this.scene.position);

        // Animate geometries
        this.geometries.forEach((mesh, index) => {
            // Rotation
            mesh.rotation.x += mesh.userData.rotationSpeed.x;
            mesh.rotation.y += mesh.userData.rotationSpeed.y;
            mesh.rotation.z += mesh.userData.rotationSpeed.z;

            // Floating animation
            const floatY = Math.sin(elapsedTime * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 2;
            mesh.position.y = mesh.userData.initialPosition.y + floatY;

            // Scroll-based depth movement
            mesh.position.z = mesh.userData.initialPosition.z - (this.scrollY * 0.01);

            // Mouse interaction - slight attraction
            const dx = this.mouse.x * 10 - mesh.position.x;
            const dy = this.mouse.y * 10 - mesh.position.y;
            mesh.position.x += dx * 0.001;
            mesh.position.y += dy * 0.001;
        });

        // Rotate particles
        if (this.particles) {
            this.particles.rotation.y = elapsedTime * 0.05;
            this.particles.rotation.x = elapsedTime * 0.03;
        }

        // Render
        this.renderer.render(this.scene, this.camera);
    }

    // Public method to update scene based on dark mode
    updateTheme(isDark) {
        const fogColor = isDark ? 0x0f172a : 0xffffff;
        this.scene.fog.color.setHex(fogColor);

        this.geometries.forEach(mesh => {
            mesh.material.opacity = isDark ? 0.3 : 0.2;
        });
    }
}

// Initialize Three.js scene when DOM is loaded
let threeScene;
document.addEventListener('DOMContentLoaded', () => {
    // Wait for loading screen to finish
    setTimeout(() => {
        if (typeof THREE !== 'undefined') {
            threeScene = new ThreeScene();

            // Update theme on dark mode toggle
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    setTimeout(() => {
                        const isDark = document.documentElement.classList.contains('dark');
                        threeScene.updateTheme(isDark);
                    }, 100);
                });
            }

            // Set initial theme
            const isDark = document.documentElement.classList.contains('dark');
            threeScene.updateTheme(isDark);
        }
    }, 2500);
});
