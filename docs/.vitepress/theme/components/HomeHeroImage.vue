<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('88code')
</script>

<template>
  <div class="hero-card-container">
    <div class="hero-card">
      <div class="card-header">
        <div class="header-left">
          <div class="subtitle">QUICK START</div>
          <div class="title">3 分钟内，只需两行配置</div>
        </div>
        <div class="header-right">
          <span class="badge">88code 中转</span>
        </div>
      </div>

      <div class="code-section">
        <div class="tab-header">
          <div class="tab-title">接入 88CODE 🔥 (推荐)</div>
        </div>
        <div class="code-block">
          <div class="line"><span class="key">claude:</span></div>
          <div class="line indent">
            <span class="key">base_url:</span> <span class="string">https://www.88code.org/api</span>
          </div>
          <div class="line indent">
            <span class="key">api_key:</span> <span class="string">88_xxxxxxxxxxxx</span>
          </div>
        </div>
      </div>

      <div class="code-section secondary">
        <div class="tab-header">
          <div class="tab-title">接入 官方直连</div>
        </div>
        <div class="code-block">
          <div class="line"><span class="key">claude:</span></div>
          <div class="line indent">
            <span class="key">base_url:</span> <span class="string">https://api.anthropic.com</span>
          </div>
          <div class="line indent">
            <span class="key">api_key:</span> <span class="string">sk-xxxxxx</span>
          </div>
        </div>
      </div>

      <div class="card-footer">
        只需配置官方的 base_url 和 api_key 换成 88code 提供的地址与密钥，原有的 IDE / CLI 使用习惯完全不变，就能享受统一面板、账号与额度计算。
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 1500px;
  padding: 20px;
}

/* Light Mode Card */
.hero-card {
  background: #ffffff;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1.5px solid #e5e7eb;
  border-radius: 24px;
  padding: 32px;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(255, 127, 80, 0.15), 0 4px 8px rgba(0, 0, 0, 0.06);
  border-color: rgba(255, 127, 80, 0.3);
}

/* Dark Mode Card */
.dark .hero-card {
  background: rgba(15, 15, 15, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 127, 80, 0.1) inset;
}

.dark .hero-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 127, 80, 0.08) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.dark .hero-card:hover::before {
  opacity: 1;
}

.dark .hero-card:hover {
  transform: translateY(-8px) rotateX(2deg);
  box-shadow: 
    0 35px 70px -15px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 127, 80, 0.3) inset,
    0 0 40px rgba(255, 127, 80, 0.15);
  border-color: rgba(255, 127, 80, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 28px;
}

.header-left {
  flex: 1;
}

/* Light Mode Subtitle */
.subtitle {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #94a3b8;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.dark .subtitle {
  color: #64748b;
}

/* Light Mode Title */
.title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
}

.dark .title {
  color: #f8fafc;
}

.badge {
  background: linear-gradient(135deg, #FF7F50 0%, #FF4500 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(255, 69, 0, 0.4);
  white-space: nowrap;
}

/* Light Mode Code Section */
.code-section {
  background: #f9fafb;
  border-radius: 14px;
  padding: 18px;
  margin-bottom: 16px;
  border: 1.5px solid #e5e7eb;
  transition: all 0.3s ease;
}

.code-section:hover {
  background: #f3f4f6;
  border-color: rgba(255, 127, 80, 0.3);
}

/* Dark Mode Code Section */
.dark .code-section {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.dark .code-section:hover {
  background: rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 127, 80, 0.2);
}

.code-section.secondary {
  opacity: 0.7;
  transition: all 0.3s ease;
}

.code-section.secondary:hover {
  opacity: 1;
}

.dark .code-section.secondary {
  opacity: 0.65;
}

.dark .code-section.secondary:hover {
  opacity: 1;
}

/* Light Mode Tab Title */
.tab-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.dark .tab-title {
  color: #94a3b8;
}

.code-block {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.8;
}

/* Light Mode Code */
.line {
  display: flex;
  padding: 2px 0;
  color: #1a1a1a;
}

.dark .line {
  color: #e2e8f0;
}

.indent {
  padding-left: 20px;
}

.key {
  color: #FF7F50;
  margin-right: 8px;
  font-weight: 600;
}

/* Light Mode String */
.string {
  color: #0969da;
  font-weight: 400;
}

.dark .string {
  color: #a5d6ff;
}

/* Light Mode Footer */
.card-footer {
  font-size: 12px;
  color: #64748b;
  line-height: 1.7;
  margin-top: 12px;
  padding-top: 16px;
  border-top: 1.5px solid #e5e7eb;
}

.dark .card-footer {
  color: #64748b;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-card {
    padding: 24px;
    max-width: 100%;
  }
  
  .title {
    font-size: 18px;
  }
  
  .code-block {
    font-size: 12px;
  }
}
</style>
