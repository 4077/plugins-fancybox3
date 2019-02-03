<?php namespace plugins\fancybox3\controllers;

class Main extends \Controller
{
    public function bind()
    {
        $data = [];

        remap($data, $this->data, 'selector, item_selector, rel, title_source');

        if (empty($data['rel'])) {
            $data['rel'] = k(8);
        }

        $data['options'] = $this->getDefaultOptions();

        ra($data['options'], $this->data('options'));

        $this->css('jquery.fancybox');
        $this->js('jquery.fancybox');
        $this->js('jquery.mousewheel-3.0.6.pack');

        $this->widget(':' . $this->data('selector'), $data);
    }

    private function getDefaultOptions()
    {
        return [
//            'padding'    => 10,
//            'mouseWheel' => true,
//            'helpers'    => [
//                'title'   => [
//                    'type' => 'over'
//                ],
//                'overlay' => [
//                    'locked' => false
//                ]
//            ]
        ];
    }
}
