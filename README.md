# رحلات القدس — مشروع تطبيق iOS

مصدر تطبيق الآيفون بالإصدار 1.0.3 (البناء 4)، بمعرّف `com.quds.umrah`.
يدعم التسجيل، متابعة حالة الطلب، اللغات الثماني، التنبيهات أثناء فتح التطبيق، وزر تأكيد الحضور وفق مهلة المشرف. يتصل بخدمة رحلات القدس الحالية عبر HTTPS؛ بيانات المسجلين ولوحة المشرف ومفاتيح التوقيع ليست ضمن هذا المشروع.

## البناء على Mac

يلزم Node.js 22 أو أحدث، وXcode متوافق مع Capacitor 8 ومثبت عليه SDK المناسب. المشروع المولد يستهدف iOS 15 أو أحدث. لم يُبنَ أو يُختبر على Xcode أو جهاز iPhone في بيئة تجهيز الملفات.

```bash
cd mobile
npm ci
npm run build
npx cap sync ios
npx cap open ios
```

في Xcode اختر الهدف App، ثم اختر حساب Apple وفريق التوقيع في Signing & Capabilities. اضبط رقم البناء أعلى من آخر بناء رفعته لذلك التطبيق. للاختبار اختر محاكي iPhone أو جهازًا مسجلاً، وللتوزيع اختر Product → Archive ثم Distribute App عبر TestFlight أو App Store Connect.

الأيقونة وشاشة البداية المولّدتان مبدئيتان؛ راجعهما قبل النشر. يلزم إعداد بيانات المتجر وسياسة الخصوصية ومراجعة متطلبات Apple. هذه الحزمة **مصدر مشروع وليست ملف IPA موقعًا أو رابط تثبيت**. يمكن نشر المصدر في مستودع GitHub خاص ثم بناؤه على Mac.

## الملفات

- `mobile/ios/`: مشروع Xcode وملفات Swift Package Manager.
- `mobile/src/` و`mobile/index.html`: واجهة التطبيق المضمّنة.
- `lib/i18n.mjs`: القاموس المشترك للغات الثماني.
- `mobile/package.json` و`package-lock.json`: إصدارات الاعتماديات المثبتة.
- `mobile/capacitor.config.json`: معرّف التطبيق وعنوان الخدمات.

`mobile/ios/App/App/public` وملفات Capacitor المولّدة تُعاد أثناء `npx cap sync ios`. لا ترفع node_modules أو بيانات التوقيع أو حسابات Apple أو ملفات .env إلى GitHub.

خدمة التسجيل الحالية: https://quds-umrah-registration.workspace-321610.chatgpt.site
خيار الآيفون المتاح الآن للمعتمرين هو رابط تطبيق الويب أعلاه. مشروع iOS هذا مسار مستقل للبناء والتوقيع والتوزيع بعد تجهيز حساب Apple.
