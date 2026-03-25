(function () {
    const canvas = document.getElementById('teeth-bg');
    const ctx = canvas.getContext('2d');
    const COUNT = 35;
    const MIN_SIZE = 50, MAX_SIZE = 120;
    const OPACITY = 0.25;

    const STORAGE_KEY = 'teeth-bg-state';

    const img = new Image();
    img.src = new URL('my-teeth-icon-alpha.png', document.currentScript.src).href;

    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function createParticle(existing) {
        const size = rand(MIN_SIZE, MAX_SIZE);
        const pad = size * 0.2;
        let x, y, tries = 0;
        do {
            x = rand(size / 2, canvas.width - size / 2);
            y = rand(size / 2, canvas.height - size / 2);
            tries++;
        } while (tries < 60 && existing.some(p => {
            const dx = p.x - x, dy = p.y - y;
            return Math.sqrt(dx * dx + dy * dy) < (p.size + size) / 2 + pad;
        }));
        return {
            x, y, size,
            vx: 0,
            vy: rand(0.03, 0.08) * (Math.random() < 0.5 ? 1 : -1),
            angle: rand(0, Math.PI * 2),
            va: rand(-0.002, 0.002),
        };
    }

    function init() {
        resize();
        try {
            const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
            if (saved && saved.length === COUNT) {
                particles = saved;
                for (const p of particles) {
                    p.x = Math.min(Math.max(p.x, p.size / 2), canvas.width - p.size / 2);
                    p.y = Math.min(Math.max(p.y, p.size / 2), canvas.height - p.size / 2);
                }
                return;
            }
        } catch (_) {}
        particles = [];
        for (let i = 0; i < COUNT; i++) particles.push(createParticle(particles));
    }

    function applyRepulsion() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i], b = particles[j];
                const dx = b.x - a.x, dy = b.y - a.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = (a.size + b.size) * 0.55;
                if (dist < minDist && dist > 0) {
                    const force = (minDist - dist) / minDist * 0.012;
                    const ny = dy / dist;
                    a.vy -= force * ny;
                    b.vy += force * ny;
                }
            }
        }
        // clamp speed so repulsion forces don't accumulate indefinitely
        const MAX_SPEED = 0.12;
        for (const p of particles) {
            if (p.vy > MAX_SPEED) p.vy = MAX_SPEED;
            if (p.vy < -MAX_SPEED) p.vy = -MAX_SPEED;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!img.complete) { requestAnimationFrame(draw); return; }

        applyRepulsion();

        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.angle += p.va;

            if (p.y > canvas.height + p.size) p.y = -p.size;
            if (p.y < -p.size) p.y = canvas.height + p.size;

            ctx.save();
            ctx.globalAlpha = OPACITY;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        }

        requestAnimationFrame(draw);
    }

    img.onload = () => { init(); draw(); };
    img.onerror = () => console.warn('teeth-bg: icon not found');
    window.addEventListener('resize', resize);
    window.addEventListener('pagehide', () => {
        try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(particles)); } catch (_) {}
    });
})();
